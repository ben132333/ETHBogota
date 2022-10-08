const { expect } = require("chai");
const { ethers } = require("hardhat");

let musicion1;
let song;
let fractionalizer;
const metadata = "https://some.url/cid";
describe("Song", function () {
  before(async function () {

    [dep, m1, m2, i, ...addrs] = await ethers.getSigners();
    deployer = dep;
    musicion1 = m1;
    musician2 = m2;
    investor = i;

    const ERC20 = await ethers.getContractFactory("TestERC20");
    erc20 = await ERC20.deploy();
    await erc20.deployed();

    await erc20.mintTo(
      investor.address,
      ethers.utils.parseEther("100").toString()
    );

    const Fractionalizer = await ethers.getContractFactory("Fractionalizer");
    fractionalizer = await Fractionalizer.deploy(erc20.address);
    await fractionalizer.deployed();

    const SONG = await ethers.getContractFactory("Song");
    song = await SONG.deploy(fractionalizer.address);
    await song.deployed();
  });

  describe("mint", function () {
    it("Should mint and fractionalize", async function () {
      const a = await song
        .connect(musicion1)
        .mint(metadata, ethers.utils.parseEther("1000.0").toString());
      const tx = await a.wait();
      const evName = tx.events[3].event;
      const tokenId = tx.events[3].args["tokenId"].toString();
      const fractionsAddress = tx.events[3].args["fractions"];

      expect(evName).to.eq("Minted");
      expect(tokenId).to.eq("1");
      expect(fractionsAddress).not.null;
      expect(fractionsAddress).not.to.eq(ethers.constants.AddressZero);

      const Fractions = await ethers.getContractFactory("Fractions");
      fractions = await Fractions.attach(fractionsAddress);
      const balance = await fractions.balanceOf(fractions.address);
      const totSupply = await fractions.totalSupply();
      expect(balance.toString()).to.eq("0");
      expect(totSupply.toString()).to.eq("500");

      const tokenURI = await song.tokenURI(tokenId);
      const ownerBalance = await song.balanceOf(musicion1.address);

      expect(ownerBalance).to.eq("1");
      expect(tokenURI).to.eq(metadata);

      const totalFractions = await fractions.fractionsCount();
      expect(totalFractions.toString()).to.eq("1000");
    });
    it("Should buy fractions of the NFT", async function () {
      const totalFractions = await fractions.fractionsCount();
      expect(totalFractions.toString()).to.eq("1000");

      const availabeFractions = await fractions.availableToBuy();
      expect(availabeFractions.toString()).to.eq("500");

      const priceWei = await fractions.fractionPrice();
      const price = +ethers.utils.formatEther(priceWei.toString());
      const priceForFractions = ethers.utils
        .parseEther((price * 2).toString())
        .toString();
      await (
        await erc20
          .connect(investor)
          .approve(fractions.address, priceForFractions)
      ).wait();
      const tx = await (await fractions.connect(investor).mint(2)).wait();

      const evName = tx.events[3].event;
      expect(evName).to.eq("FractionsMinted");

      const investorBalance = await fractions.balanceOf(investor.address);
      expect(investorBalance.toString()).to.eq('2');

      const availableToBuy = await fractions.availableToBuy();
      expect(availableToBuy.toString()).to.eq('498');

      const treasuryBalance = await erc20.balanceOf(fractions.treasury());
      expect(treasuryBalance.toString()).to.eq(priceForFractions);

    });
  });
});

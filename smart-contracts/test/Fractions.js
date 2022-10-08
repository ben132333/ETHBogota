const { expect } = require("chai");
const { ethers } = require("hardhat");

let deployer;
let musicion1;
let musician2;
let investor;
let song;
let fractionalizer;
const metadata = "https://some.url/cid";
describe("Fractions", function () {
  before(async function () {
    [dep, m1, m2, i, ...addrs] = await ethers.getSigners();
    deployer = dep;
    musicion1 = m1;
    musician2 = m2;
    investor = i;

    const Fractionalizer = await ethers.getContractFactory("Fractionalizer");
    fractionalizer = await Fractionalizer.deploy();
    await fractionalizer.deployed();

    const SONG = await ethers.getContractFactory("Song");
    song = await SONG.deploy(fractionalizer.address);
    await song.deployed();

    describe("mint", function () {
      it("Should mint and fractionalize", async function () {
        const a = await song.connect(musicion1).mint(metadata, (10 * 10) ^ 18);
        const tx = await a.wait();

        const evName = tx.events[2].event;
        const tokenId = tx.events[2].args["tokenId"].toString();
        const fractionsAddress = tx.events[2].args["fractions"];

        expect(evName).to.eq("Minted");
        expect(tokenId).to.eq("1");
        expect(fractionsAddress).not.null;
        expect(fractionsAddress).not.to.eq(ethers.constants.AddressZero);

        const Fractions = await ethers.getContractFactory("FractionsImpl");
        fractions = await Fractions.attach(fractionsAddress);
        const balance = await fractions.balanceOf(fractions.address);
        const totSupply = await fractions.totalSupply();
        expect(balance.toString()).to.eq("0");
        expect(totSupply.toString()).to.eq("0");

        const tokenURI = await song.tokenURI(tokenId);
        const ownerBalance = await song.balanceOf(musicion1.address);

        expect(ownerBalance).to.eq("1");
        expect(tokenURI).to.eq(metadata);

        const totalFractions = await fractions.fractionsCount();
        console.log(totalFractions);
      });
    });
  });
});

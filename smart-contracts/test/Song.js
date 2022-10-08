const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");


let deployer;
let musicion1;
let musician2; 
let investor;
let song;
let fractionalizer;

describe("Song", function () {
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
  });


  describe("mint", function () {
    it.only("Should mint and fractionalize", async function () {

      const a = await song.mint('asd', 10 * 10 ^ 18);
      const tx = await a.wait();

      const evName = tx.events[2].event;
      const tokenId = tx.events[2].args['tokenId'].toString();
      const fractionsAddress = tx.events[2].args['fractions'];

      expect(evName).to.eq('Minted');
      expect(tokenId).to.eq('1');
      expect(fractionsAddress).not.null;
      expect(fractionsAddress).not.to.eq(ethers.constants.AddressZero)

      const Fractions = await ethers.getContractFactory("FractionsImpl");
      fractions = await Fractions.attach(fractionsAddress);
      const balance = await fractions.balanceOf(fractions.address);
      console.log(balance);

    });
  });

  // describe("Withdrawals", function () {
  //   describe("Validations", function () {
  //     it("Should revert with the right error if called too soon", async function () {
  //       const { lock } = await loadFixture(deployOneYearLockFixture);

  //       await expect(lock.withdraw()).to.be.revertedWith(
  //         "You can't withdraw yet"
  //       );
  //     });

  //     it("Should revert with the right error if called from another account", async function () {
  //       const { lock, unlockTime, otherAccount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // We can increase the time in Hardhat Network
  //       await time.increaseTo(unlockTime);

  //       // We use lock.connect() to send a transaction from another account
  //       await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
  //         "You aren't the owner"
  //       );
  //     });

  //     it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
  //       const { lock, unlockTime } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // Transactions are sent using the first signer by default
  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).not.to.be.reverted;
  //     });
  //   });

  //   describe("Events", function () {
  //     it("Should emit an event on withdrawals", async function () {
  //       const { lock, unlockTime, lockedAmount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw())
  //         .to.emit(lock, "Withdrawal")
  //         .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
  //     });
  //   });

  //   describe("Transfers", function () {
  //     it("Should transfer the funds to the owner", async function () {
  //       const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).to.changeEtherBalances(
  //         [owner, lock],
  //         [lockedAmount, -lockedAmount]
  //       );
  //     });
  //   });
  // });
});

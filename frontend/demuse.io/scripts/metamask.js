(async function (global) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const connectwalletHandler = () => {
    if (global.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        document.getElementById("metamask-button").innerText = "Connected";
        await accountChangedHandler(provider.getSigner());
      });
    } else {
      alert("Please Install Metamask!!!");
    }
  };
  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    console.info(`address: ${address}`);
    const balance = await newAccount.getBalance();
    console.info(`balance: ${ethers.utils.formatEther(balance)}`);
    return await getuserBalance(address);
  };
  const getuserBalance = async (address) => {
    return provider.getBalance(address, "latest");
  };

  global.demuseGlobal = {
    ...global.demuseGlobal,
    connectwalletHandler,
    accountChangedHandler,
    getuserBalance,
  };
})(window);

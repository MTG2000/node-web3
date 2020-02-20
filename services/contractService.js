module.exports = (web3, contractAbi, contractAddress) => {
  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  return {
    signAndSend: async (methodName, privateKey, options = {}, ...args) => {
      const method = contract.methods[[methodName]];
      let encoded = method(...args).encodeABI();
      var tx = {
        gas: "53528",
        data: encoded,
        to: contractAddress,
        ...options
      };
      const signed = await web3.eth.accounts.signTransaction(tx, privateKey);
      const result = await web3.eth.sendSignedTransaction(
        signed.rawTransaction
      );
      return result;
    },
    query: async (methodName, accountAddress = "", ...args) => {
      const method = contract.methods[[methodName]];
      return await method(...args).call({
        from: accountAddress
      });
    }
  };
};

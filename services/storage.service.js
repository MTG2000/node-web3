const contractJson = require("../build/contracts/SimpleStorage.json");

module.exports = web3 => {
  const storageService = require("../services/contractService")(
    web3,
    contractJson.abi,
    contractJson.networks["5777"].address
  );

  return {
    setValue: async (account, value) =>
      await storageService.signAndSend(
        "setValue",
        account,
        { value: "1000000" },
        value
      ),
    getValue: async account => await storageService.query("getValue", account),
    getTestValue: async () => await storageService.query("value")
  };
};

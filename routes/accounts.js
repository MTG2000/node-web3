const router = require("express").Router();
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
const storageService = require("../services/storage.service")(web3);
// const storageService = require("../services/storage.contract")(web3);

//Test Accounts
var account1 = web3.eth.accounts.privateKeyToAccount(
  "0xf8db7ae0c40cc8b8ac01fca9235eb5a05710a0a9643ca642f1713c6106841495"
);
var account2 = web3.eth.accounts.privateKeyToAccount(
  "0x068a188d3da86efadddaaae23f7895b20d7a514882b16c338159a7be7c9a8558"
);

router.get("/all", (req, res) => {
  res.send([account1, account2]);
});

router.get("/test-setvalue", async (req, res) => {
  await storageService.setValue(account1.privateKey, 800);
  await storageService.setValue(account2.privateKey, 900);
  await storageService.setValue(account1.privateKey, 700);

  const v1 = await storageService.getValue(account1.address);
  const v2 = await storageService.getValue(account2.address);
  const v3 = await storageService.getTestValue();

  res.send({ v1, v2, v3 });
});

module.exports = router;

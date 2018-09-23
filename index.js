const { CediPlus } = require('./services/charge.wallet');


const wallet = new CediPlus(API_KEY, DESCRIPTION, WALLET_NUMBER, WALLET_TYPE, AMOUNT, PRODUCTION_CALLBACK_URL);

wallet.Charge()
  .then((response) => {
    return console.log(response);
  })
  .catch((error) => {
    return console.log(error)
  });
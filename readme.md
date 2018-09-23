# CediPlus Nodejs SDK v1.0.0

## CediPlus Services exposed by the library

- Mobile Money Account Charge

For more information on the services listed above, visit the [CediPlus website](https://cediplus.com)

## How to use

`npm install cediplus`


 You can get your PUBLICK_KEY and SECRET_KEY from the Rave dashboard.

 Go [here](https://cediplus.com) to get your live api key.

### Charge Mobile Money Wallet

```javascript
const CediPlus = require('cediplus');

const cediplus = new CediPlus(API_KEY, DESCRIPTION, WALLET_NUMBER, WALLET_TYPE, AMOUNT, YOUR_PRODUCTION_CALLBACK_URL);

cediplus.Charge({
  "api_key": "your_api_key",
  "description": "transaction_description",
  "wallet_number": "0574017xxx",
  "wallet_type": "t or m",
  "amount": "1.00",
  "callback_url": "https://yourwebsite.com/callback"
}).then(response => {
    console.log(response.body);

}).catch(error => {
    console.error(`Error - ${error}`);

})
```
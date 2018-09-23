# CediPlus Nodejs SDK v1.0.0

## CediPlus Services exposed by the library

- Mobile Money Account Charge

For more information on the services listed above, visit the [CediPlus website](https://cediplus.com)

## How to use

1 - `npm install cediplus`

2 - `const CediPlus = require('cediplus');`

3 -`const cediplus = new CediPlus(API_KEY, DESCRIPTION, WALLET_NUMBER, WALLET_TYPE, AMOUNT, 
YOUR_PRODUCTION_CALLBACK_URL);`

 You can get your API_KEY from your CediPlus dashboard.

 Go [here](https://cediplus.com) to get your live api key.

### Charge Mobile Money Wallet

```javascript
const CediPlus = require('cediplus');

const data = {
               "api_key": "your_api_key",
               "description": "transaction_description",
               "wallet_number": "0574017xxx",
               "wallet_type": "t or m",
               "amount": "1.00",
               "callback_url": "https://yourwebsite.com/callback"
             };

const cediplus = new CediPlus(data);

cediplus.Charge().then(response => {
    console.log(response.body);
}).catch(error => {
    console.error(`Error - ${error}`);

})
```
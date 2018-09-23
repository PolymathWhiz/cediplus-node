'use strict';

const { validateWallet, validateWalletType } = require('../policies/validate');
const request = require('request');

class CediPlus {
  constructor(data) {
    this.base_url = "https://www.cediplus.com/api/v2";
    this.action = "sendbill";
    this.api_key = data.api_key || '';
    this.description = data.description || '';
    this.wallet_number = data.wallet_number || '';
    this.wallet_type = data.wallet_type || '';
    this.amount = data.amount || '';
    this.callback_url = data.callback_url || '';
  }

  async Charge() {

    if (!validateWallet(this.wallet_number) || !validateWalletType(this.wallet_type)) {
      throw ("Invalid wallet number or wallet type");
    }

    return new Promise((resolve, reject) => {
      request({
          method: "POST",
          url: this.base_url,
          headers: {
            "Content-Type": "application/json"
          },
          form: {
            action: this.action,
            wallet_type: this.wallet_type,
            amount: this.amount,
            description: this.description,
            callback_url: this.callback_url,
            wallet: this.wallet_number,
            api_key: this.api_key
          }
        },
        (err, response, body) => {
          if (err) return reject(err);

          const cediplusResponse = JSON.parse(body);

          return resolve(cediplusResponse);
        }
      );
    });
  }

}

module.exports = { CediPlus };
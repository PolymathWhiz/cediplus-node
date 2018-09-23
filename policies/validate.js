const validateWallet = phone => {
  const regex = /^[0-9]{10}$/;

  return regex.test(phone);
};

const validateWalletType = walletType => {
  if (walletType === 'm' || walletType === 't') return walletType;

  return false;
};

module.exports = {validateWallet, validateWalletType};
import { ethers } from "ethers";

const createNewWallet = () => {
  const newWallet = ethers.Wallet.createRandom();
  localStorage.setItem("privateKey", newWallet.privateKey);
  return {
    privKey: newWallet.privateKey,
    mnemonic: newWallet.mnemonic?.phrase,
  };
};

const createWalletFromMnemonic = (mnemonic: string) => {
  return ethers.Wallet.fromPhrase(mnemonic);
};

const deletePrivateKeyFromLocalStorage = () => {
  const keyExists = localStorage.getItem("privateKey") !== null;
  if (keyExists) {
    localStorage.removeItem("privateKey");
    return true; // Indicates that the key existed and was removed
  } else {
    return false; // Indicates that the key did not exist
  }
};

export {
  createNewWallet,
  deletePrivateKeyFromLocalStorage,
  createWalletFromMnemonic,
};

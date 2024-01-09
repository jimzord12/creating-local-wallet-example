import {
  createNewWallet,
  deletePrivateKeyFromLocalStorage,
} from "@/lib/localWallet/handlers";
import { create } from "domain";
import { Wallet, ethers } from "ethers";
import { useEffect, useState } from "react";

// We create this symbol in order to safely add the Mnemonic to the Wallet object.
// Importantly, we have delete this symbol once it is displayed to the user.
// const customTempMnemonicSymbol = Symbol("customTempMnemonic");

interface ExtendedWallet extends Wallet {
  customTempMnemonic?: string;
}

const useLocalWallet = () => {
  const [wallet, setWallet] = useState<ExtendedWallet | null>(null);

  useEffect(() => {
    const storedPrivateKey = localStorage.getItem("privateKey");
    if (storedPrivateKey) {
      setWallet(new ethers.Wallet(storedPrivateKey) as ExtendedWallet);
    }
    // else {
    //   const { privKey, mnemonic } = createNewWallet();
    //   const newlyCreatedWallet = new ethers.Wallet(privKey) as ExtendedWallet;

    //   newlyCreatedWallet[customTempMnemonicSymbol] = mnemonic;

    //   setWallet(newlyCreatedWallet);
    // }
  }, []);

  const createWallet = () => {
    const { privKey, mnemonic } = createNewWallet();
    const newlyCreatedWallet = new ethers.Wallet(privKey) as ExtendedWallet;

    newlyCreatedWallet.customTempMnemonic = mnemonic;

    setWallet(newlyCreatedWallet);

    console.log("The New Wallet is: ", newlyCreatedWallet);
  };

  const deleteWallet = () => {
    const success = deletePrivateKeyFromLocalStorage();
    if (success) {
      setWallet(null);
    } else {
      throw new Error("No wallet to delete");
    }
  };

  return { wallet, createWallet, deleteWallet };
};

export default useLocalWallet;

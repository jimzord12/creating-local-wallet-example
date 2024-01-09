"use client";
import WalletDetails from "@/components/WalletDetails";
import { Button } from "@/components/ui/button";
import useLocalWallet from "@/hooks/useLocalWallet";
import { useEffect } from "react";

export default function Home() {
  const { wallet, createWallet, deleteWallet } = useLocalWallet();

  // useEffect(() => {
  //   if (wallet) {
  //     wallet.connect();
  //   }
  // }, [wallet]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Button variant="secondary" onClick={createWallet}>
          Create Local Wallet
        </Button>
        <div className="horizontalSpacer" />

        {wallet && (
          <>
            <WalletDetails
              address={wallet.address}
              privateKey={wallet.privateKey}
              mnemonic={wallet.customTempMnemonic ?? "ERROR! NO MNEMONIC!"}
            />
            <div className="horizontalSpacer" />
            <Button variant="destructive" onClick={deleteWallet}>
              Delete Local Wallet
            </Button>
          </>
        )}
      </div>
    </main>
  );
}

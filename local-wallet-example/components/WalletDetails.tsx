import React from "react";

interface WalletDetailsProps {
  address: string;
  privateKey: string;
  mnemonic: string;
}

const WalletDetails: React.FC<WalletDetailsProps> = ({
  address,
  privateKey,
  mnemonic,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Wallet Details</h2>
      <p className="mb-2 text-green-700">
        <span className="font-bold text-slate-900">Address:</span> {address}
      </p>
      <p className="mb-2 text-green-700">
        <span className="font-bold text-slate-900">Private Key:</span>{" "}
        {privateKey}
      </p>
      <p className="mb-2 text-green-700">
        <span className="font-bold text-slate-900">Mnemonic:</span> {mnemonic}
      </p>
    </div>
  );
};

export default WalletDetails;

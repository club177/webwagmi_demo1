import { type BaseError, useReadContracts } from "wagmi";
import { smartContractConfig } from "./lib/config";

export default function Reads() {
  const { data, error, isPending } = useReadContracts({
    contracts: [
      {
        ...smartContractConfig,
        functionName: "balanceOf",
        args: ["0xcA85c244953716738DEBCb74bF15A5A237b36F44"],
      },
      {
        ...smartContractConfig,
        functionName: "ownerOf",
        args: [6049n],
      },
      {
        ...smartContractConfig,
        functionName: "totalSupply",
      },
    ],
  });
  const [balance, ownerOf, totalSupply] = data || [];

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div>Error: {(error as BaseError).shortMessage || error.message}</div>
    );

  return (
    <>
      <div>
        Balance:{" "}
        {balance?.result !== undefined ? balance.result.toString() : ""}
      </div>
      <div>
        Owner of Token 6049:{" "}
        {ownerOf?.result !== undefined ? ownerOf.result.toString() : ""}
      </div>
      <div>
        Total Supply:{" "}
        {totalSupply?.result !== undefined ? totalSupply.result.toString() : ""}
      </div>
    </>
  );
}

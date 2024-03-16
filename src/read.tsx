import React, { useState, useEffect } from "react";
import "./App.css";
import "./read.css";

import { readContract } from "@wagmi/core";
import { config, smartContractConfig } from "./lib/config";

export default function Read() {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readContract(config, {
          ...smartContractConfig,
          functionName: "totalSupply",
          args: [],
        });
        setTotalSupply(Number(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <>
      <div className="display-container">
        <h1>TotalSupply: {totalSupply ? totalSupply : "loading..."}</h1>
        <h2>CHANGE API KEY IN .config for web3modal it is invalid!</h2>
      </div>
    </>
  );
}

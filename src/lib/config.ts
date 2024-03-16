import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { createClient } from "viem";

import { walletConnect } from "wagmi/connectors";
import { abi } from "./abi";

const projectId = "Y6b2dbb647de0b3bf2614f5e6ebe875d2"; // CHANGE KEY - IS MOST LIKELY INVALID

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = createConfig({
  chains: [sepolia],
  connectors: [walletConnect({ projectId, metadata, showQrModal: false })],
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    });
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  metadata,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export const smartContractConfig = {
  abi: abi,
  address: "0xA28066f2B5627E61872e1c92Ef3AaB64D95df65A",
  chainId: sepolia.id,
} as const;

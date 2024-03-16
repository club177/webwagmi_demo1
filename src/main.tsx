import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3ModalProvider } from './web3modal.tsx'
import { WagmiProvider } from 'wagmi' 
import { config } from './config' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}> 
        <QueryClientProvider client={queryClient}> 

  <Web3ModalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ModalProvider>
  </QueryClientProvider> 

  </WagmiProvider> 
)

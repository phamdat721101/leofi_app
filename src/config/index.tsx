import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { defineChain } from 'viem'


// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Leofi',
  description: 'Be a professional crypto trader',
  url: 'https://localhost:3000/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const metisSepolia = defineChain({
  id: 59902,
  name: 'Metis Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Metis Sepolia',
    symbol: 'METIS',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.metisdevops.link'] },
  },
  blockExplorers: {
    default: {
      name: 'Metis Sepolia Explorer',
      url: 'https://sepolia-explorer.metisdevops.link',
      apiUrl: 'https://sepolia-explorer.metisdevops.link/api',
    },
  },
  contracts: {
  },
});

// Create wagmiConfig
const chains = [mainnet, sepolia, metisSepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})
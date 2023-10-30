import '@rainbow-me/rainbowkit/styles.css';

import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import AuthProvider from '@/providers/AuthProvider';
import Head from 'next/head';

const { chains, publicClient } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

const { connectors } = getDefaultWallets({ appName: 'Pop Art Cats', projectId: 'c82bf580bc75f857794502f4849db05b', chains });

const wagmiConfig = createConfig({ autoConnect: true, connectors, publicClient })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <AuthProvider>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps}  />
        </AuthProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

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
import { config } from '@/client/types/config';

const { chains, publicClient } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: config.alchemyId }), publicProvider()]
);

const { connectors } = getDefaultWallets({ appName: config.appName, projectId: config.walletConnectProjectId, chains });

const wagmiConfig = createConfig({ autoConnect: true, connectors, publicClient })

/**
 * TODO: fix the font thing 
 */
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

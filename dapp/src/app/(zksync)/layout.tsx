"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, Flex, Layout } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import { ConnectKitButton, ConnectKitProvider, getDefaultConfig } from "connectkit";
import Link from "next/link";
import { zkSyncInMemoryNode, zkSyncSepoliaTestnet } from "viem/chains";
import { WagmiProvider, createConfig, http } from "wagmi";

const config = createConfig(
  getDefaultConfig({
    chains: [
      zkSyncInMemoryNode,
      zkSyncSepoliaTestnet
    ],
    transports: {
      [zkSyncInMemoryNode.id]: http(),
      [zkSyncSepoliaTestnet.id]: http(),
    },
    walletConnectProjectId: "3744d5a2fe976f821f378bdd74fcab66",
    appName: "nazotoki",

    // Optional App Info
    appDescription: "puzzle gameFI",
    appUrl: "https://nazotoki.vercel.app/", // your app's url
    appIcon: "https://family.co/logo.png",
  })
)

const queryClient = new QueryClient()

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <Layout className="h-screen !bg-[#281e35]">
            {/* <Header className="!p-3 !bg-[#281e35]">
              <Flex className="h-full"
                justify="space-between"
                align="center">
                <Link href="/">
                </Link>

              </Flex>
            </Header> */}

            <div className="fixed top-3 left-3">
              <Link href="/create">
                <Button className="!bg-[#404040] !text-white !border-none">CREATE</Button>
              </Link>
            </div>
            <div className="fixed top-3 right-3">
              <ConnectKitButton />
            </div>
            <Content className="h-full overflow-auto no-scrollbar">
              {children}
            </Content>
          </Layout>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

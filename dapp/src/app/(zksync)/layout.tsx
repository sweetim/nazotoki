"use client"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import {
  Flex,
  Layout,
} from "antd"
import {
  Content,
  Header,
} from "antd/lib/layout/layout"
import {
  ConnectKitButton,
  ConnectKitProvider,
  getDefaultConfig,
} from "connectkit"
import Image from "next/image"
import Link from "next/link"
import {
  zkSyncInMemoryNode,
  zkSyncSepoliaTestnet,
} from "viem/chains"
import {
  createConfig,
  http,
  WagmiProvider,
} from "wagmi"

const config = createConfig(
  getDefaultConfig({
    chains: [
      zkSyncInMemoryNode,
      zkSyncSepoliaTestnet,
    ],
    transports: {
      [zkSyncInMemoryNode.id]: http(),
      [zkSyncSepoliaTestnet.id]: http(),
    },
    walletConnectProjectId: "3744d5a2fe976f821f378bdd74fcab66",
    appName: "nazotoki",
    appDescription: "puzzle gameFI",
    appUrl: "https://nazotoki.vercel.app/",
    appIcon: "https://family.co/logo.png",
  }),
)

const queryClient = new QueryClient()

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <Layout className="h-screen !bg-[#281e35]">
            <Header className="!p-3 !bg-[#281e35]">
              <Flex className="h-full" justify="space-between" align="center">
                <Link href="/">
                  <Image
                    width={0}
                    height={0}
                    className="w-9 h-auto bg-white rounded-full p-1"
                    sizes="100vw"
                    src="/logo.svg"
                    priority={false}
                    alt="logo"
                  />
                </Link>
                <ConnectKitButton />
              </Flex>
            </Header>
            <Content className="h-full overflow-auto no-scrollbar">
              {children}
            </Content>
          </Layout>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

import "./globals.css"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import {
  ConfigProvider,
  ThemeConfig,
} from "antd"
import type { Metadata } from "next"
import { Mali } from "next/font/google"

const mali = Mali({
  weight: "400",
  subsets: [ "latin" ],
})

const antThemeConfig: ThemeConfig = {
  token: {
    fontFamily: "mali",
  },
}

export const metadata: Metadata = {
  title: "nazotoki",
  description: "puzzle gameFI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${mali.className} h-full bg-[#281e35]`}>
        <ConfigProvider theme={antThemeConfig}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  )
}

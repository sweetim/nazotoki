import "./globals.css"

import type { Metadata } from "next";
import { Mali } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';


const mali = Mali({
  weight: "400",
  subsets: ["latin"]
});

const antThemeConfig: ThemeConfig = {
  token: {
    fontFamily: "mali",
  },
  components: {
    Layout: {
      bodyBg: "white"
    },
  }
}

export const metadata: Metadata = {
  title: "nazotoki",
  description: "puzzle gameFI",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${mali.className} h-full`}>
          <ConfigProvider theme={antThemeConfig}>
            <AntdRegistry>{children}</AntdRegistry>
          </ConfigProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from 'next/script'
import localFont from "next/font/local";
import "./globals.css";

const alataRegularFont = localFont({
  src: './assets/fonts/AlataRegular.ttf',
})

export const metadata: Metadata = {
  title: "Resumé of Sreedev Kodichath.",
  description: "Driving innovation through efficient engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${alataRegularFont.className} antialiased`} >
        {children}
        <Script strategy='afterInteractive' src="https://analytics.devtechnica.com/script.js" data-website-id="1b018bfd-7f5b-46d5-9aa4-76beb364d40b" />
      </body>
    </html>
  );
}

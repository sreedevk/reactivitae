import type { Metadata } from "next";
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
      </body>
    </html>
  );
}

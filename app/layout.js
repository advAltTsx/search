import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ChangePath from "@/components/ChangePath";
import { Suspense } from "react";
import localFont from '@next/font/local'


// const inter = Inter({ subsets: ["latin"] });
const nothing = localFont({
  src: [
    {
      path: './nothing.ttf',
      weight: '800'
    },
  ],
  variable: '--font-nothing'
})

export const metadata = {
  title: "Modern Search",
  icons: {
    icon: '/logo.jpg'
  },
  description: "Nothing Styled Search Engine. Indie Project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nothing.variable} font-sans`}>
<link rel="icon" href="/logo.jpg" />
      {/* 080808 */}
      <body className={`} bg-[#080808]`}>
        {/* <body className={`${inter.className} bg-[#080808]`}> */}
        <Suspense>
          <ChangePath />

          <main>{children}</main>
          {/* <Footer /> */}
        </Suspense>
      </body>
    </html>
  );
}

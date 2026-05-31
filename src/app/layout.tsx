import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import CursorSpotlight from "@/components/CursorSpotlight"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Abdul Ahad Abeer | Full Stack Developer",
  description: "Full Stack Developer building scalable web apps",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="relative flex flex-col min-h-full">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  )
}

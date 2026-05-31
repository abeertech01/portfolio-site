import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import CursorSpotlight from "@/components/CursorSpotlight"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({
  variable: "--font-inter",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative flex flex-col min-h-full">
        <ThemeProvider>
          <CursorSpotlight />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

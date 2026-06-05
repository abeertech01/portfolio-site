import type { Metadata } from "next"
import { Inter, Geist_Mono, Space_Grotesk, Bebas_Neue } from "next/font/google"
import "./globals.css"
import CursorSpotlight from "@/components/CursorSpotlight"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import SmoothScroll from "@/components/SmoothScroll"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
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
      className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative z-0 flex flex-col min-h-full">
        <ThemeProvider>
          <SmoothScroll />
          <CursorSpotlight />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

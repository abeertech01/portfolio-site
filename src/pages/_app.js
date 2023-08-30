import RootLayout from "@/components/RootLayout"
import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

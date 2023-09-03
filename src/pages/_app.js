import RootLayout from "@/components/RootLayout"
import Transition from "@/components/Transition"
import "@/styles/globals.css"

// router
import { useRouter } from "next/router"

// framer motion
import { AnimatePresence, motion } from "framer-motion"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <RootLayout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </RootLayout>
  )
}

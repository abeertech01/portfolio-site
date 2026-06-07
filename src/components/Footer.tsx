export default function Footer() {
  return (
    <footer className="bg-background w-full">
      <div className="mx-auto px-4 md:px-8 pb-8 md:pb-10 w-full max-w-6xl">
        <div className="border-black/[0.08] dark:border-white/8 border-t pt-8 text-center">
          <p className="font-grotesk text-[0.78rem] text-zinc-500 dark:text-white/60">
            © {new Date().getFullYear()} Abeer Abdul-Ahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

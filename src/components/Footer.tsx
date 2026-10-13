/** Bottom row of the contact block — rendered inside the green Contact section. */
export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 pt-5.5 border-[rgb(12_17_16/0.25)] border-t-[1.5px] font-jbmono text-xs text-[#0f2a21]">
      <span>© {new Date().getFullYear()} Abeer Abdul-Ahad</span>
      <a
        href="#top"
        className="text-[#0c1110] hover:opacity-70 transition-opacity"
      >
        back to top ↑
      </a>
    </footer>
  )
}

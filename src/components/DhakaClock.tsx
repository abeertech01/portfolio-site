"use client"

import { useEffect, useState } from "react"

/**
 * Ticking Dhaka time. Renders a placeholder on the server and first client
 * paint so hydration never mismatches, then fills in after mount. Kept as its
 * own tiny component so the once-a-second re-render never touches the hero.
 */
export default function DhakaClock({
  format,
  placeholder,
}: {
  format: "long" | "short"
  placeholder: string
}) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!now) return <>{placeholder}</>

  const text =
    format === "long"
      ? now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Dhaka",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          minute: "2-digit",
        })

  return <>{text}</>
}

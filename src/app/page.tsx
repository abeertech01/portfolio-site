import Image from "next/image"
import avatar from "@/assets/abeer-avatar.png"
import TiltCard from "@/components/TiltCard"

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center pt-20 min-h-screen">
      {/* Hero group — card + text, centered together */}
      <div className="flex flex-col items-center gap-8">
        {/* Glass card — bigger */}
        <TiltCard
          className="relative"
          style={{ width: "310px", height: "400px" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "22px",
              border: "1px solid rgba(35, 148, 125, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow:
                "0 0 50px rgba(35,148,125,0.14), inset 0 1px 0 rgba(255,255,255,0.09)",
              overflow: "hidden",
            }}
          >
            <Image
              src={avatar}
              alt="Abdul Ahad Abeer"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
            />
            {/* Emerald tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(160deg, rgba(35,148,125,0.12) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
            {/* Top edge glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(35,148,125,0.9), transparent)",
              }}
            />
          </div>
        </TiltCard>

        {/* Greeting */}
        <h1 style={{ textAlign: "center", lineHeight: 1.3 }}>
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "1.9rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              display: "block",
              marginBottom: "0.4rem",
            }}
          >
            Hey, I&apos;m
          </span>

          {/* Bebas Neue name on solid emerald background */}
          <span
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "3.2rem",
              letterSpacing: "0.04em",
              color: "#ffffff",
              backgroundColor: "#23947d",
              display: "inline-block",
              lineHeight: "1",
              padding: "0.18em 0.5em 0.10em",
            }}
          >
            Abeer Abdul-Ahad
          </span>
        </h1>

        {/* Scroll indicator */}
        <div
          style={{ animation: "float-y 2.2s ease-in-out infinite" }}
          className="flex flex-col items-center gap-1.5 mt-2"
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
            }}
            className="text-white/35 uppercase"
          >
            Scroll to explore
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-white/35"
          >
            <path
              d="M7 1v12M7 13l-4-4M7 13l4-4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}

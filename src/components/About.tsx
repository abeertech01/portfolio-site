import React from "react"
import Image from "next/image"
import abeerInSuit from "@/assets/abeer-in-suit.png"
import worldMap from "@/assets/world-map.svg"

const EMERALD = "#34d399"

const card: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "28px",
  overflow: "hidden",
}

const placeholder: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk)",
  fontSize: "0.75rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.13)",
}

export default function About() {
  return (
    <section className="mx-auto px-8 pb-28 w-full max-w-243.75">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "180px 138.5px 138.5px 228px",
          gap: "16px",
        }}
      >
        {/* ── 1 · Name ─────────────────────────────── col 1 · row 1 ── */}
        <div
          style={{
            ...card,
            gridColumn: "1",
            gridRow: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px 24px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              textShadow:
                "0 0 18px rgba(255,255,255,0.6), 0 0 50px rgba(255,255,255,0.25), 0 0 100px rgba(255,255,255,0.1)",
            }}
          >
            <span className="text-[2.5rem]">ABEER</span>
            <br />
            <span className="text-[2rem]">ABDUL AHAD</span>
          </h2>

          {/* separator */}
          <div
            style={{
              width: "56px",
              height: "1.2px",
              backgroundColor: "rgba(255,255,255,0.3)",
              margin: "15px 0",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.77rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            Full Stack Developer
          </p>
        </div>

        {/* ── 2 · Location / map ───────────────── col 2–3 · row 1 ── */}
        <div
          style={{
            ...card,
            gridColumn: "2 / 4",
            gridRow: "1",
            padding: 0,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* faint world map (white SVG used as a mask, tinted emerald-grey) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(180,210,200,0.16)",
              maskImage: `url(${worldMap.src})`,
              WebkitMaskImage: `url(${worldMap.src})`,
              maskSize: "115% auto",
              WebkitMaskSize: "115% auto",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          {/* vertical scanning beam sweeping left → right */}
          <div
            aria-hidden
            className="map-scan"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background: EMERALD,
              boxShadow: `0 0 3px ${EMERALD}`,
            }}
          />

          {/* readout */}
          <div style={{ position: "relative", padding: "28px" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                color: "#ffffff",
                textShadow: `0 0 24px ${EMERALD}55`,
              }}
            >
              DHAKA, BANGLADESH
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.55)",
                marginTop: "10px",
              }}
            >
              23.8103° N, 90.4125° E
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                color: EMERALD,
                marginTop: "4px",
              }}
            >
              — GMT +6
            </p>
          </div>
        </div>

        {/* ── 3 · Mindset (tall) ─────────────── col 1 · rows 2–4 ── */}
        <div style={{ ...card, gridColumn: "1", gridRow: "2 / 5" }}>
          <p style={placeholder}>Mindset</p>
        </div>

        {/* ── 4 · Photo ───────────────────── col 2 · rows 2–3 ── */}
        <div
          style={{
            ...card,
            gridColumn: "2",
            gridRow: "2 / 4",
            padding: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={abeerInSuit}
            alt="Abeer Abdul Ahad"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* ── 5 · Craft (tall) ───────────────── col 3 · rows 2–4 ── */}
        <div style={{ ...card, gridColumn: "3", gridRow: "2 / 5" }}>
          <p style={placeholder}>Craft</p>
        </div>

        {/* ── 6 · Location ─────────────────────── col 2 · row 4 ── */}
        <div style={{ ...card, gridColumn: "2", gridRow: "4" }}>
          <p style={placeholder}>Location</p>
        </div>
      </div>
    </section>
  )
}

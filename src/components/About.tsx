import React from "react"
import abeerInSuit from "@/assets/abeer-in-suit.png"
import dhaka from "@/assets/dhaka_drone.jpg"
import worldMap from "@/assets/world-map.svg"
import PhotoCard from "@/components/PhotoCard"
import { HoverProvider, HoverZone } from "@/components/HoverLink"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiRedux,
  SiExpress,
  SiPrisma,
  SiDrizzle,
  SiShadcnui,
} from "react-icons/si"
import type { IconType } from "react-icons"

const EMERALD = "#34d399"

/** brand colour per tech, so each logo reads true */
type Skill = { icon: IconType; name: string; color: string }

const SKILLS_TOP: Skill[] = [
  { icon: SiJavascript, name: "JS", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TS", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node", color: "#5FA04E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiPostgresql, name: "Postgres", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
]

const SKILLS_BOTTOM: Skill[] = [
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: SiShadcnui, name: "Shadcn UI", color: "#ffffff" },
  { icon: SiExpress, name: "ExpressJS", color: "#ffffff" },
  { icon: SiPrisma, name: "Prisma", color: "#5A67D8" },
  { icon: SiDrizzle, name: "Drizzle", color: "#C5F74F" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
]

function SkillPill({ icon: Icon, name, color }: Skill) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        padding: "0 13px",
        whiteSpace: "nowrap",
      }}
    >
      <Icon size={16} color={color} style={{ flexShrink: 0 }} />
      <span
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "0.82rem",
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.82)",
        }}
      >
        {name}
      </span>
    </span>
  )
}

/**
 * One scrolling row. `dir` sets travel direction; the tunnel "mouths" at each
 * edge are 3D-rotated panels — an entry on the incoming side, an exit on the
 * outgoing side, mirrored when the row reverses. (No fade mask, per request.)
 */
function SkillRow({ items, dir }: { items: Skill[]; dir: "ltr" | "rtl" }) {
  // fade both ends to transparent so items dissolve in/out at the edges
  const fade =
    "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)"

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "38px",
        display: "flex",
        alignItems: "center",
        // top/bottom rules give each row a "tape" band; they sit inside the
        // mask so the whole strip (lines + logos) fades together at the ends
        backgroundColor: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    >
      <div
        className={dir === "ltr" ? "marquee-ltr" : "marquee-rtl"}
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((s, i) => (
          <SkillPill key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
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
      {/* marquee animations live here (not globals.css) so they ship with the
          component and aren't subject to global CSS tree-shaking / stale HMR */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes marquee-ltr { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-ltr { animation: marquee-ltr 22s linear infinite; }
.marquee-rtl { animation: marquee-rtl 22s linear infinite; }
`,
        }}
      />
      <HoverProvider>
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
                letterSpacing: "-0.03em",
                color: "#ffffff",
                textShadow:
                  "0 0 18px rgba(255,255,255,0.6), 0 0 50px rgba(255,255,255,0.25), 0 0 100px rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-[2.2rem]">ABEER</span>
              <br />
              <span className="text-[2rem]">ABDUL AHAD</span>
            </h2>

            {/* separator */}
            <div
              style={{
                width: "56px",
                height: "1.2px",
                backgroundColor: "rgba(255,255,255,0.3)",
                margin: "12px 0",
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

          {/* ── 2 · Location / map (hovering here reveals Dhaka in the photo) ── */}
          <HoverZone
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
          </HoverZone>

          {/* ── 3 · What I do (tall) ──────────── col 1 · rows 2–4 ── */}
          <div
            style={{
              ...card,
              gridColumn: "1",
              gridRow: "2 / 5",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* heading + underline */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                }}
              >
                What I do
              </h3>
              <div
                style={{
                  width: "34px",
                  height: "1.8px",
                  borderRadius: "1px",
                  backgroundColor: EMERALD,
                  marginTop: "8px",
                }}
              />
            </div>

            {/* opening pitch */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.94rem",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  marginBottom: "5px",
                  display: "inline-block",
                }}
              >
                I build pixel-perfect, scalable web apps that are fun to use.
              </span>
              <br />I work across AI and automation, meeting what a business
              needs.
            </p>

            {/* small label above the rails */}
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
              }}
            >
              Stack I work with
            </p>

            {/* two opposite-scrolling rails of tech */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <SkillRow items={SKILLS_TOP} dir="rtl" />
              {/* reversed list + ltr motion → Next.js leads, then Redux, etc. */}
              <SkillRow items={[...SKILLS_BOTTOM].reverse()} dir="ltr" />
            </div>

            {/* closing note */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.94rem",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              A hustler at heart, aware of modern technologies — where the
              industry is moving, developing my own products along the way.
              <br />
              <span
                style={{
                  fontWeight: 600,
                  marginTop: "5px",
                  display: "inline-block",
                }}
              >
                Open to collaborate on exciting projects!
              </span>
            </p>

            {/* status pill — pinned to the bottom */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginTop: "auto",
                paddingTop: "4px",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: EMERALD,
                  boxShadow: `0 0 10px ${EMERALD}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                Open for new opportunities &amp; freelance
              </span>
            </div>
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
            <PhotoCard
              photo={abeerInSuit}
              hoverImage={dhaka}
              alt="Abeer Abdul Ahad"
            />
          </div>

          {/* ── 5 · Craft (tall) ───────────────── col 3 · rows 2–4 ── */}
          <div style={{ ...card, gridColumn: "3", gridRow: "2 / 5" }}>
            <p style={placeholder}>Craft</p>
          </div>

          {/* ── 6 · (placeholder — content TBD) ─── col 2 · row 4 ── */}
          <div style={{ ...card, gridColumn: "2", gridRow: "4" }} />
        </div>
      </HoverProvider>
    </section>
  )
}

"use client"

import React, { createContext, useContext, useState } from "react"

/**
 * Tiny shared-hover context so one grid cell (the location/map box) can drive a
 * visual change in another (the photo tile). Both cells are separate grid
 * children, so the state has to live above them.
 */
const HoverCtx = createContext<{
  hovered: boolean
  setHovered: (v: boolean) => void
}>({ hovered: false, setHovered: () => {} })

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <HoverCtx.Provider value={{ hovered, setHovered }}>
      {children}
    </HoverCtx.Provider>
  )
}

export function useHover() {
  return useContext(HoverCtx)
}

/** A div that reports its hover state into the context. */
export function HoverZone({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  const { setHovered } = useHover()
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </div>
  )
}

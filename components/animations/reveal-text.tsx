// components/reveal-text.tsx
"use client"

import { useEffect, useRef } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react"

export function RevealText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const pos = useMotionValue(-17)

  const backgroundImage = useTransform(pos, (p) => {
    const start = p - 17
    const end = p + 17
    if (start >= 100)
      return "linear-gradient(90deg, var(--foreground), var(--foreground))"

    const colors = ["#A97CF8", "#F38CB8", "#FDCC92"]
    const parts: string[] = []
    if (start > 0) parts.push(`var(--foreground) ${start.toFixed(2)}%`)
    colors.forEach((c, i) =>
      parts.push(`${c} ${(start + (i / (colors.length - 1)) * 34).toFixed(2)}%`)
    )
    if (end < 100) parts.push(`transparent ${end.toFixed(2)}%`)

    return `linear-gradient(90deg, ${parts.join(", ")})`
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(pos, 117, {
      duration: 1.5,
      ease: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
    })
    return () => controls.stop()
  }, [inView, pos])

  return (
    <motion.span
      ref={ref}
      className="text-inherit"
      style={{
        color: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage,
      }}
    >
      {children}
    </motion.span>
  )
}

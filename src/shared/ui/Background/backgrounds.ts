export const BG = {
  warmBeigeLuxury:
    "bg-background " +
    "bg-[radial-gradient(1100px_650px_at_18%_18%,rgb(var(--palette-cream)/0.85),transparent_62%)," +
    "radial-gradient(900px_520px_at_82%_22%,rgb(var(--palette-orange)/0.18),transparent_62%)," +
    "radial-gradient(1000px_600px_at_50%_90%,rgb(var(--palette-orange)/0.10),transparent_70%)] " +
    "dark:bg-background dark:bg-[radial-gradient(1100px_650px_at_18%_18%,rgb(var(--palette-cream)/0.10),transparent_62%)," +
    "radial-gradient(900px_520px_at_82%_22%,rgb(var(--palette-orange)/0.14),transparent_62%)," +
    "radial-gradient(1000px_600px_at_50%_90%,rgb(var(--palette-orange)/0.08),transparent_70%)]",

  sunsetGlow:
    "bg-background " +
    "bg-[radial-gradient(1000px_600px_at_20%_15%,rgb(var(--palette-orange)/0.22),transparent_60%)," +
    "radial-gradient(900px_520px_at_85%_20%,rgb(var(--palette-cream)/0.90),transparent_60%)] " +
    "dark:bg-background dark:bg-[radial-gradient(1000px_600px_at_20%_15%,rgb(var(--palette-orange)/0.16),transparent_60%)," +
    "radial-gradient(900px_520px_at_85%_20%,rgb(var(--palette-cream)/0.08),transparent_60%)]",
} as const

export type BackgroundKey = keyof typeof BG

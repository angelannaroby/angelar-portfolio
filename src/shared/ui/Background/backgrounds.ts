export const BG = {
  warmBeigeLuxury:
    "bg-background " +
    "bg-[radial-gradient(1000px_620px_at_10%_8%,rgb(var(--gradient-hero-glow-1)/0.14),transparent_58%)," +
    "radial-gradient(820px_520px_at_88%_12%,rgb(var(--gradient-hero-glow-2)/0.08),transparent_56%)," +
    "radial-gradient(950px_620px_at_50%_100%,rgb(var(--gradient-section-glow)/0.08),transparent_64%)," +
    "linear-gradient(180deg,rgb(var(--gradient-bg-start))_0%,rgb(var(--gradient-bg-mid))_48%,rgb(var(--gradient-bg-end))_100%)]",

  sunsetGlow:
    "bg-background " +
    "bg-[radial-gradient(920px_580px_at_14%_12%,rgb(var(--gradient-hero-glow-1)/0.18),transparent_56%)," +
    "radial-gradient(720px_500px_at_86%_14%,rgb(var(--gradient-hero-glow-2)/0.10),transparent_54%)," +
    "linear-gradient(180deg,rgb(var(--gradient-bg-start))_0%,rgb(var(--gradient-bg-mid))_45%,rgb(var(--gradient-bg-end))_100%)]",
} as const

export type BackgroundKey = keyof typeof BG

import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication - ContentRank",
  description: "Authentication pages for ContentRank",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-muted/10">{children}</div>
}

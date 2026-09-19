import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { person } from "@/lib/content"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${person.name} — ${person.role}`,
  description:
    "Portfolio of Jills Ambaliya, a Computer Engineering student focused on Generative AI, Agentic AI, RAG and full-stack development. Building intelligent systems, one idea at a time.",
  keywords: [
    "Jills Ambaliya",
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "Full-Stack Developer",
    "Computer Engineering",
    "LangGraph",
    "Portfolio",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#05070b",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

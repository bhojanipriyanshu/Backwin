import type React from "react"
import "@/app/globals.css"
import "swiper/css"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata = {
  title: "BackWin - Energy Reimagined",
  description: "Premium non-alcoholic beer, energy drinks, and goli soda for the modern consumer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

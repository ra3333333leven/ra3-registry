import { ThemeProvider } from '@/components/(shared)/theme-provider'
import { NavBar } from '@/registry/ra3-ui/navbar'
import { CirclePower, Home, Loader, Navigation } from 'lucide-react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ra3 Registry',
  description: "A component registry for ra3's components",
}

const navigationItems = [
  { name: 'Home', href: '/', icon: <Home /> },
  { name: 'Button', href: '/button', icon: <CirclePower /> },
  { name: 'Loading', href: '/loading', icon: <Loader /> },
  { name: 'NavBar', href: '/navbar', icon: <Navigation /> },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar navigationItems={navigationItems} withThemeToggle />
          <main className="h-dvh w-dvw">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

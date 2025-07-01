import { AppSidebar, AppSidebarTrigger } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { NavBar } from '@/registry/ra3-ui/navbar'
import { ThemeProvider } from '@/registry/ra3-ui/theme-provider'
import { Home, Navigation } from 'lucide-react'
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
  { name: 'Navbar', href: '/navbar', icon: <Navigation /> },
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
          <SidebarProvider>
            <NavBar navigationItems={navigationItems} withThemeToggle />
            <main className="h-dvh w-dvw overflow-x-hidden">
              <SidebarInset>
                <AppSidebarTrigger
                  className="fixed right-6 top-6 z-50"
                  disappearWhenOpen
                />
                {children}
              </SidebarInset>
            </main>
            <AppSidebar side="right" />
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

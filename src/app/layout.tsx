import { NavBar } from '@/registry/ui/navbar'
import { CirclePower, FileText, Home, Loader } from 'lucide-react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
  { name: 'Placeholder', href: '/placeholder', icon: <FileText /> },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar navigationItems={navigationItems} />
        {children}
      </body>
    </html>
  )
}

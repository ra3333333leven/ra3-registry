'use client'

import { MoonIcon } from 'lucide-react'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

// Simple toggle button for theme switching
export function ThemeToggle({
  className,
  children,
}: {
  className?: string
  children?: (props: {
    theme: string | undefined
    mounted: boolean
  }) => React.ReactNode
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'text-foreground/80 hover:bg-muted rounded-full p-2 transition-colors',
        className
      )}
    >
      {children ? (
        children({ theme, mounted })
      ) : mounted && theme === 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}

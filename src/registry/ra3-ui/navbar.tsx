'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { ThemeToggle } from '@/components/(shared)/theme-toggle'

export interface NavigationItem {
  name: string // Required
  href: Url // Required - for navigation links
  icon: React.ReactNode // Required - for mobile display
}

export interface NavBarProps {
  navigationItems: NavigationItem[]
  className?: string
  withThemeToggle?: boolean
}

function NavBar({
  navigationItems,
  className,
  withThemeToggle = false,
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  // Set active tab based on current pathname on mount
  useEffect(() => {
    const activeItem = navigationItems.find((item) =>
      typeof item.href === 'string'
        ? item.href === pathname
        : item.href.pathname === pathname
    )
    if (activeItem) {
      setActiveTab(activeItem.name)
    }
  }, [pathname, navigationItems])

  return (
    <div
      className={cn(
        'fixed left-1/2 -translate-x-1/2 z-50',
        isMobile ? 'bottom-0 mb-6' : 'top-0 pt-6',
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/10 border border-border backdrop-blur-sm py-1 px-1 rounded-full shadow-lg">
        {navigationItems.map((item) => {
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'relative cursor-pointer text-base font-semibold px-6 py-2 rounded-full transition-colors',
                'text-foreground hover:text-primary hover:bg-muted/60',
                isActive && 'bg-muted text-primary'
              )}
            >
              {isMobile ? item.icon : item.name}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          )
        })}
        {withThemeToggle && <ThemeToggle />}
      </div>
    </div>
  )
}

export { NavBar }

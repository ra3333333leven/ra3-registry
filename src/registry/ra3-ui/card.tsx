'use client'

import { BorderBeam } from '@/components/magicui/border-beam'
import { Card as ShadcnCard } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface CardProps extends React.ComponentProps<typeof ShadcnCard> {
  /**
   * Whether to add the laser border beam effect
   */
  laser?: boolean
  /**
   * Whether to add a gradient background using primary colors
   */
  gradient?: boolean
  /**
   * Whether to add a shadow effect
   */
  shadow?: boolean
  /**
   * Whether to add hover animations (scale and enhanced shadow)
   */
  hoverAnimation?: boolean
  /**
   * Border beam configuration options
   */
  laserProps?: {
    size?: number
    duration?: number
    delay?: number
    colorFrom?: string
    colorTo?: string
    reverse?: boolean
    borderWidth?: number
  }
}

function Card({
  laser = false,
  gradient = false,
  shadow = false,
  hoverAnimation = false,
  laserProps,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        laser && 'relative overflow-hidden',
        gradient &&
          'bg-gradient-to-br from-primary/10 via-primary/5 to-background',
        shadow ? 'shadow-md' : 'shadow-none',
        hoverAnimation &&
          'transition-all duration-200 hover:scale-105 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
      {laser && (
        <BorderBeam
          size={laserProps?.size}
          duration={laserProps?.duration}
          delay={laserProps?.delay}
          colorFrom={laserProps?.colorFrom}
          colorTo={laserProps?.colorTo}
          reverse={laserProps?.reverse}
          borderWidth={laserProps?.borderWidth}
        />
      )}
    </ShadcnCard>
  )
}

export { Card }

'use client'

import { BorderBeam } from '@/components/magicui/border-beam'
import { Card as ShadcnCard } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface CardProps extends React.ComponentProps<typeof ShadcnCard> {
  /**
   * Whether to add the laser border beam effect
   */
  withLaser?: boolean
  /**
   * Whether to add a gradient background using primary colors
   */
  withGradient?: boolean
  /**
   * Whether to add a shadow effect
   */
  withShadow?: boolean
  /**
   * Whether to add hover animations (scale and enhanced shadow)
   */
  withHoverAnimation?: boolean
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
  withLaser = false,
  withGradient = false,
  withShadow = false,
  withHoverAnimation = false,
  laserProps,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        withLaser && 'relative overflow-hidden',
        withGradient &&
          'bg-gradient-to-br from-primary/10 via-primary/5 to-background',
        withShadow && 'shadow-md',
        withHoverAnimation &&
          'transition-all duration-200 hover:scale-105 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
      {withLaser && (
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

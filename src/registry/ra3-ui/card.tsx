'use client'

import { BorderBeam } from '@/components/magicui/border-beam'
import { Card as ShadcnCard } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const OUTLINE = 'border-primary'

const cardVariants = cva('', {
  variants: {
    laser: {
      true: 'relative overflow-hidden',
      false: '',
    },
    gradient: {
      true: 'bg-gradient-to-br from-primary/10 via-primary/5 to-background',
      false: '',
    },
    shadow: {
      true: 'shadow-md',
      false: 'shadow-none',
    },
    hoverAnimation: {
      true: 'transition-all duration-200 hover:scale-105 hover:shadow-lg',
      false: '',
    },
    outline: {
      true: OUTLINE,
      false: '',
    },
  },
  defaultVariants: {
    laser: false,
    gradient: false,
    shadow: false,
    hoverAnimation: false,
    outline: false,
  },
})

interface CardProps
  extends React.ComponentProps<typeof ShadcnCard>,
    VariantProps<typeof cardVariants> {
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
  laser,
  gradient,
  shadow,
  hoverAnimation,
  outline,
  laserProps,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        cardVariants({
          laser,
          gradient,
          shadow,
          hoverAnimation,
          outline,
        }),
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

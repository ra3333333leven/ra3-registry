import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import React from 'react'

// Spinner container variants - controls visibility and layout
const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
})

// Loader icon variants - controls size and animation
const loaderVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      sm: 'size-6', // Small spinner (24px)
      md: 'size-8', // Medium spinner (32px)
      lg: 'size-12', // Large spinner (48px)
      xl: 'size-16', // Extra large spinner (64px)
      full: 'size-full', // Full size - expands to fill parent container
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface SpinnerProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string
  children?: React.ReactNode
}

/**
 * Spinner Component
 *
 * A flexible loading spinner that can be shown/hidden and sized appropriately.
 * The 'full' size variant expands to occupy the entire space of its parent container.
 *
 * @param size - Controls the spinner size (sm, md, lg, xl, full)
 * @param show - Controls visibility of the spinner
 * @param children - Optional content to display below the spinner (like loading text)
 * @param className - Additional CSS classes to apply to the spinner icon
 */
function Spinner({ size, show, children, className }: SpinnerProps) {
  return (
    <span className={cn('h-full w-full', spinnerVariants({ show }))}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  )
}

/**
 * LoadingPage Component
 *
 * A full-page loading component that centers a large spinner.
 * Designed to fill the entire available space of its container.
 */
function LoadingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  )
}

export { Spinner, LoadingPage }

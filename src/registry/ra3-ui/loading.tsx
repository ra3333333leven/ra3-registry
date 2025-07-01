import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import React from 'react'

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

const loaderVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      sm: 'size-6',
      md: 'size-8',
      lg: 'size-12',
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

function Spinner({ size, show, children, className }: SpinnerProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  )
}

function LoadingPage({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex h-dvh w-dvw items-center justify-center', className)}
    >
      <Spinner size="lg" />
    </div>
  )
}

export { Spinner, LoadingPage }

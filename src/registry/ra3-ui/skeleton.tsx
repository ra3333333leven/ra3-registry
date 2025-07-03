'use client'

import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

// Direction type for multiple skeleton layout
type SkeletonDirection = 'vertical' | 'horizontal'

// Variant type for predefined skeleton shapes
type SkeletonVariant = 'card' | 'box' | 'circle' | 'profile' | 'text' | 'page'

// Main skeleton CVA configuration
const skeletonVariants = cva('', {
  variants: {
    size: {
      full: 'w-full h-full',
      'w-full': 'w-full',
      'h-full': 'h-full',
    },
    animation: {
      pulse: 'animate-pulse',
      wave: 'relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent dark:after:via-white/10 after:animate-[wave_2s_ease-in-out_infinite]',
    },
  },
  defaultVariants: {
    animation: 'wave',
  },
})

// Individual skeleton components using shadcn skeleton directly
function SkeletonCard({
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants>) {
  return (
    <ShadcnSkeleton
      className={cn(
        'h-32 w-full rounded-lg',
        skeletonVariants({ size, animation }),
        className
      )}
      {...props}
    />
  )
}

function SkeletonBox({
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants>) {
  return (
    <ShadcnSkeleton
      className={cn(
        'h-24 w-24 rounded-md',
        skeletonVariants({ size, animation }),
        className
      )}
      {...props}
    />
  )
}

function SkeletonCircle({
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants>) {
  return (
    <ShadcnSkeleton
      className={cn(
        'h-12 w-12 rounded-full',
        skeletonVariants({ size, animation }),
        className
      )}
      {...props}
    />
  )
}

function SkeletonProfile({
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants>) {
  return (
    <div className={cn('flex items-center space-x-4', className)} {...props}>
      <ShadcnSkeleton
        className={cn(
          'h-12 w-12 rounded-full',
          skeletonVariants({ size, animation })
        )}
      />
      <div className="space-y-2">
        <ShadcnSkeleton
          className={cn('h-4 w-[200px]', skeletonVariants({ size, animation }))}
        />
        <ShadcnSkeleton
          className={cn('h-4 w-[150px]', skeletonVariants({ size, animation }))}
        />
      </div>
    </div>
  )
}

function SkeletonText({
  lines = 3,
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & { lines?: number } & VariantProps<
    typeof skeletonVariants
  >) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {Array.from({ length: lines }, (_, index) => (
        <ShadcnSkeleton
          key={index}
          className={cn(
            'h-4',
            index === lines - 1 ? 'w-3/4' : 'w-full',
            skeletonVariants({ size, animation })
          )}
        />
      ))}
    </div>
  )
}

function SkeletonPage({
  className,
  animation = 'wave',
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants>) {
  return (
    <div className={cn('w-full space-y-6', className)} {...props}>
      {/* Header */}
      <div className="space-y-2">
        <ShadcnSkeleton
          className={cn('h-8 w-1/3', skeletonVariants({ size, animation }))}
        />
        <ShadcnSkeleton
          className={cn('h-4 w-2/3', skeletonVariants({ size, animation }))}
        />
      </div>

      {/* Content sections */}
      <div className="space-y-4">
        <ShadcnSkeleton
          className={cn(
            'h-48 w-full rounded-lg',
            skeletonVariants({ size, animation })
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShadcnSkeleton
            className={cn(
              'h-32 w-full rounded-lg',
              skeletonVariants({ size, animation })
            )}
          />
          <ShadcnSkeleton
            className={cn(
              'h-32 w-full rounded-lg',
              skeletonVariants({ size, animation })
            )}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-2">
        <ShadcnSkeleton
          className={cn('h-4 w-full', skeletonVariants({ size, animation }))}
        />
        <ShadcnSkeleton
          className={cn('h-4 w-4/5', skeletonVariants({ size, animation }))}
        />
        <ShadcnSkeleton
          className={cn('h-4 w-3/5', skeletonVariants({ size, animation }))}
        />
      </div>
    </div>
  )
}

// Main Skeleton wrapper component props
type SkeletonProps = {
  count?: number
  direction?: SkeletonDirection
  variant?: SkeletonVariant
  className?: string
  children?: React.ReactNode
  gap?: string
} & VariantProps<typeof skeletonVariants>

// Variant component mapping object
const skeletonVariantComponents = {
  card: SkeletonCard,
  box: SkeletonBox,
  circle: SkeletonCircle,
  profile: SkeletonProfile,
  text: SkeletonText,
  page: SkeletonPage,
} as const

/**
 * Main Skeleton wrapper component that can render multiple skeletons
 * @param count - Number of skeleton instances to render (defaults to 1)
 * @param direction - Layout direction when count > 1 ('vertical' | 'horizontal')
 * @param size - Size behavior ('full' | 'w-full' | 'h-full')
 * @param variant - Predefined skeleton variant to use
 * @param animation - Animation type ('pulse' | 'wave', defaults to 'wave')
 * @param className - Additional CSS classes
 * @param children - Custom skeleton content (overrides variant)
 * @param gap - Gap between multiple skeletons
 */
function Skeleton({
  count = 1,
  direction = 'vertical',
  size,
  variant = 'card',
  animation = 'wave',
  className,
  children,
  gap = 'gap-4',
  ...props
}: SkeletonProps) {
  // Container classes using CVA
  const containerClasses = cn(
    count > 1 && (direction === 'vertical' ? 'flex flex-col' : 'flex flex-row'),
    count > 1 && gap,
    skeletonVariants({ size }),
    className
  )

  // Render content using object mapping
  const renderContent = () => {
    if (children) {
      return children
    }

    const VariantComponent = skeletonVariantComponents[variant]
    return <VariantComponent animation={animation} size={size} />
  }

  // Single skeleton render
  if (count === 1) {
    return (
      <div className={cn(skeletonVariants({ size }), className)} {...props}>
        {renderContent()}
      </div>
    )
  }

  // Multiple skeletons render
  return (
    <div className={containerClasses} {...props}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>{renderContent()}</div>
      ))}
    </div>
  )
}

export {
  Skeleton,
  SkeletonCard,
  SkeletonBox,
  SkeletonCircle,
  SkeletonProfile,
  SkeletonText,
  SkeletonPage,
}

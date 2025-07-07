import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// Base skeleton components
function SkeletonRectangle() {
  return <ShadcnSkeleton className="w-full h-full rounded-lg" />
}

function SkeletonSquare() {
  return (
    <div className="aspect-square max-w-full max-h-full">
      <ShadcnSkeleton className="w-full h-full rounded-lg" />
    </div>
  )
}

// Text skeleton component
interface SkeletonTextProps {
  count?: number
}

// Reusable type for components that optionally include skeleton text
type WithSkeletonText<T = object> = T & {
  skeletonText?: true | SkeletonTextProps
}

function SkeletonText({ count = 1 }: SkeletonTextProps) {
  return (
    <div className="flex flex-col justify-center gap-2 h-full">
      {Array.from({ length: count }).map((_, index) => {
        const isLast = index === count - 1 && count > 1
        return (
          <ShadcnSkeleton
            key={index}
            className={`rounded-full flex-1 ${isLast ? 'w-[85%]' : 'w-full'}`}
          />
        )
      })}
    </div>
  )
}

// Profile skeleton component
type SkeletonProfileProps = WithSkeletonText

function SkeletonProfile({ skeletonText = true }: SkeletonProfileProps = {}) {
  return (
    <div className="flex items-center gap-4 h-full">
      <div className="aspect-square h-full">
        <ShadcnSkeleton className="w-full h-full rounded-full" />
      </div>
      <div className="flex-1 h-3/5">
        {skeletonText === true ? (
          <SkeletonText count={2} />
        ) : (
          <SkeletonText {...skeletonText} />
        )}
      </div>
    </div>
  )
}

// Card skeleton component
type SkeletonCardProps = WithSkeletonText & {
  skeletonCardClassName?: string
}

function SkeletonCard({
  skeletonText = true,
  skeletonCardClassName,
}: SkeletonCardProps) {
  return (
    <div className="w-full h-full flex flex-col gap-4 rounded-xl min-h-0">
      {/* Header/Image area - takes up more space */}
      <div
        className={cn(
          'min-h-[60%]',
          skeletonText ? 'flex-[2]' : 'flex-1',
          skeletonCardClassName
        )}
      >
        <SkeletonRectangle />
      </div>

      {/* Text content area - takes up less space */}
      {skeletonText && (
        <div className="flex-1">
          <SkeletonText
            {...(skeletonText === true
              ? {
                  count: 2,
                }
              : skeletonText)}
          />
        </div>
      )}
    </div>
  )
}

// Skeleton wrapper component
type SkeletonShape = 'rectangle' | 'square' | 'text' | 'profile' | 'card'

const skeletonVariants = cva('flex gap-2', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})

interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  skeletonShape?: SkeletonShape
  count?: number
  children?: React.ReactNode
  className?: string
}

function Skeleton({
  skeletonShape = 'rectangle',
  count = 1,
  direction,
  children,
  className,
}: SkeletonProps) {
  // Render the skeleton shape based on the prop or children
  const renderSkeletonShape = () => {
    // If children are provided, use them as custom skeletons
    if (children) {
      return children
    }

    // Otherwise render based on skeletonShape prop with defaults
    switch (skeletonShape) {
      case 'rectangle':
        return <SkeletonRectangle />
      case 'square':
        return <SkeletonSquare />
      case 'text':
        return <SkeletonText />
      case 'profile':
        return <SkeletonProfile />
      case 'card':
        return <SkeletonCard />
      default:
        return <SkeletonRectangle />
    }
  }

  // If count is 1, render single skeleton without wrapper
  if (count === 1) {
    return (
      <div className={cn('h-full w-full', className)}>
        {renderSkeletonShape()}
      </div>
    )
  }

  // Render multiple skeletons with direction layout
  return (
    <div
      className={cn(
        'h-full w-full',
        skeletonVariants({ direction }),
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex-1">
          {renderSkeletonShape()}
        </div>
      ))}
    </div>
  )
}

export {
  SkeletonRectangle,
  SkeletonSquare,
  SkeletonText,
  SkeletonProfile,
  SkeletonCard,
  Skeleton,
}

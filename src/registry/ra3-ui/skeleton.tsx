import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

// Base skeleton components
export function SkeletonRectangle() {
  return <Skeleton className="w-full h-full rounded-lg" />
}

export function SkeletonSquare() {
  return (
    <div className="aspect-square max-w-full max-h-full">
      <Skeleton className="w-full h-full rounded-lg" />
    </div>
  )
}

// Text skeleton component
export interface SkeletonTextProps {
  count?: number
}

// Reusable type for components that optionally include skeleton text
export type WithSkeletonText<T = object> = T & {
  skeletonText?: true | SkeletonTextProps
}

export function SkeletonText({ count = 1 }: SkeletonTextProps) {
  return (
    <div className="flex flex-col justify-center gap-2 h-full">
      {Array.from({ length: count }).map((_, index) => {
        const isLast = index === count - 1 && count > 1
        return (
          <Skeleton
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

export function SkeletonProfile({
  skeletonText = true,
}: SkeletonProfileProps = {}) {
  return (
    <div className="flex items-center gap-4 h-full">
      <div className="aspect-square h-full">
        <Skeleton className="w-full h-full rounded-full" />
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
type SkeletonCardProps = WithSkeletonText

export function SkeletonCard({ skeletonText }: SkeletonCardProps) {
  return (
    <div className="w-full h-full flex flex-col gap-4 rounded-xl min-h-0">
      {/* Header/Image area - takes up more space */}
      <div className={cn('min-h-[60px]', skeletonText ? 'flex-[2]' : 'flex-1')}>
        <SkeletonRectangle />
      </div>

      {/* Text content area - takes up less space */}
      {skeletonText && (
        <div className="flex-1 min-h-[40px]">
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

import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

// BoundingBox variants for different sizes with equal aspect ratios
const boundingBoxVariants = cva(
  'border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'h-12 w-12', // 48px x 48px
        md: 'h-16 w-16', // 64px x 64px
        lg: 'h-24 w-24', // 96px x 96px
        xl: 'h-32 w-32', // 128px x 128px
        '2xl': 'h-40 w-40', // 160px x 160px
        '3xl': 'h-48 w-48', // 192px x 192px
        '4xl': 'h-56 w-56', // 224px x 224px
        '5xl': 'h-64 w-64', // 256px x 256px
        full: 'h-full w-full', // Full parent size
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface BoundingBoxProps extends VariantProps<typeof boundingBoxVariants> {
  children: React.ReactNode
  className?: string
  label?: string // Optional label to show what the bounding box represents
}

/**
 * BoundingBox - Visual helper component to show boundaries and parent-child relationships
 * Useful for demonstrating how components behave within their containers
 */
export function BoundingBox({
  children,
  size,
  className,
  label,
}: BoundingBoxProps) {
  return (
    <div className="relative">
      {label && (
        <div className="absolute -top-6 left-0 text-xs text-muted-foreground font-mono">
          {label}
        </div>
      )}
      <div className={cn(boundingBoxVariants({ size }), className)}>
        {children}
      </div>
    </div>
  )
}

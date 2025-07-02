import { DemoPage } from '@/components/(shared)/demo-page'
import { Spinner } from '@/registry/ra3-ui/loading'
import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

// BoundingBox variants for different sizes with equal aspect ratios
const boundingBoxVariants = cva(
  'border-2 border-dashed border-muted-foreground/30 rounded-lg',
  {
    variants: {
      size: {
        sm: 'h-12 w-12', // 48px x 48px
        md: 'h-16 w-16', // 64px x 64px
        lg: 'h-24 w-24', // 96px x 96px
        xl: 'h-32 w-32', // 128px x 128px
        '2xl': 'h-40 w-40', // 160px x 160px
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
}

// Helper component to visualize spinner boundaries
function BoundingBox({ children, size, className }: BoundingBoxProps) {
  return (
    <div className={cn(boundingBoxVariants({ size }), className)}>
      {children}
    </div>
  )
}

const codeExample = `import { Spinner } from '@/components/ui/loading'

// Helper component to visualize boundaries (optional)
function BoundingBox({ children, className = "" }) {
  return (
    <div className={\`border-2 border-dashed border-muted-foreground/30 rounded-lg \${className}\`}>
      {children}
    </div>
  )
}

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Spinner sizes */}
      <div className="flex gap-6 items-center">
        <BoundingBox className="h-12 w-12">
          <Spinner size="sm" />
        </BoundingBox>
        <BoundingBox className="h-16 w-16">
          <Spinner size="md" />
        </BoundingBox>
        <BoundingBox className="h-24 w-24">
          <Spinner size="lg" />
        </BoundingBox>
        <BoundingBox className="h-32 w-32">
          <Spinner size="xl" />
        </BoundingBox>
        
        {/* Full size spinner - expands to fill parent container */}
        <BoundingBox className="h-24 w-24">
          <Spinner size="full" />
        </BoundingBox>
      </div>
      
      {/* Spinner with text */}
      <Spinner size="md">
        <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
      </Spinner>
      
      {/* Different container sizes showing full expansion */}
      <div className="flex gap-4">
        <BoundingBox className="h-24 w-24">
          <Spinner size="full" />
        </BoundingBox>
        <BoundingBox className="h-32 w-32">
          <Spinner size="full" />
        </BoundingBox>
        <BoundingBox className="h-40 w-40">
          <Spinner size="full" />
        </BoundingBox>
      </div>
      
      {/* Visibility control */}
      <div className="flex gap-6">
        <BoundingBox className="h-16 w-16">
          <Spinner show={true} size="md" />
        </BoundingBox>
        <BoundingBox className="h-16 w-16">
          <Spinner show={false} size="md" />
        </BoundingBox>
      </div>
    </div>
  )
}`

export default function LoadingPageDemo() {
  return (
    <DemoPage
      componentName="Loading"
      componentDescription="Loading components including a configurable spinner with different sizes and states. The 'full' size variant expands to fill its parent container."
      previewContent={
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-medium mb-3">Spinner Sizes</h4>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <BoundingBox size="lg">
                  <Spinner size="sm" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">Small</p>
              </div>
              <div className="text-center">
                <BoundingBox size="lg">
                  <Spinner size="md" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">Medium</p>
              </div>
              <div className="text-center">
                <BoundingBox size="lg">
                  <Spinner size="lg" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">Large</p>
              </div>
              <div className="text-center">
                <BoundingBox size="lg">
                  <Spinner size="xl" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">
                  Extra Large
                </p>
              </div>
              <div className="text-center">
                <BoundingBox size="xl">
                  <Spinner size="full" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">
                  Full (fills parent)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Spinner with Text</h4>
            <Spinner size="md">
              <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
            </Spinner>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">
              Parent Container Expansion
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              The &apos;full&apos; size spinner expands to fill its parent
              container completely.
            </p>
            <div className="flex justify-between items-center">
              <BoundingBox size="lg">
                <Spinner size="full" />
              </BoundingBox>
              <BoundingBox size="xl">
                <Spinner size="full" />
              </BoundingBox>
              <BoundingBox size="2xl">
                <Spinner size="full" />
              </BoundingBox>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Visibility Control</h4>
            <div className="flex justify-center items-center gap-6">
              <div className="text-center">
                <BoundingBox size="md">
                  <Spinner show={true} size="md" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">Visible</p>
              </div>
              <div className="text-center">
                <BoundingBox size="md">
                  <Spinner show={false} size="md" />
                </BoundingBox>
                <p className="text-xs text-muted-foreground mt-1">Hidden</p>
              </div>
            </div>
          </div>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="loading"
    />
  )
}

import { ComponentPreview } from '@/components/(shared)/component-preview'
import { CodeExample } from '@/components/(shared)/code-example'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { BoundingBox } from '@/components/(shared)/bounding-box'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import {
  Skeleton,
  SkeletonCard,
  SkeletonBox,
  SkeletonCircle,
  SkeletonProfile,
  SkeletonText,
  SkeletonPage as SkeletonPageComponent,
} from '@/registry/ra3-ui/skeleton'

export default function SkeletonPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('skeleton')}
          description={getDescriptionFromRegistry('skeleton')}
        />

        {/* Basic Skeleton Variants */}
        <ComponentPreview
          title="Skeleton Variants"
          description="Different skeleton shapes for various UI elements"
          previewClassName="p-6"
          preview={
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Card</p>
                <SkeletonCard />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Box</p>
                <SkeletonBox />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Circle</p>
                <SkeletonCircle />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Profile</p>
                <SkeletonProfile />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Text</p>
                <SkeletonText />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Page</p>
                <BoundingBox size="sm" className="h-32 overflow-hidden">
                  <SkeletonPageComponent />
                </BoundingBox>
              </div>
            </div>
          }
          code={`import { 
  SkeletonCard, 
  SkeletonBox, 
  SkeletonCircle, 
  SkeletonProfile, 
  SkeletonText, 
  SkeletonPage 
} from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      <SkeletonCard />
      <SkeletonBox />
      <SkeletonCircle />
      <SkeletonProfile />
      <SkeletonText />
      <SkeletonPage />
    </div>
  )
}`}
        />

        {/* Skeleton with Variants */}
        <ComponentPreview
          title="Skeleton with Variants"
          description="Use the main Skeleton component with variant prop for quick skeleton creation"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Card Variant</p>
                <Skeleton variant="card" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Profile Variant</p>
                <Skeleton variant="profile" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Text Variant</p>
                <Skeleton variant="text" />
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      <Skeleton variant="card" />
      <Skeleton variant="profile" />
      <Skeleton variant="text" />
    </div>
  )
}`}
        />

        {/* Animation Variants */}
        <ComponentPreview
          title="Animation Variants"
          description="Choose between pulse and wave animations - wave creates a shimmer effect similar to Material UI"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Wave Animation (Default)</p>
                <Skeleton variant="card" animation="wave" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Pulse Animation</p>
                <Skeleton variant="card" animation="pulse" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Wave Profile</p>
                <Skeleton variant="profile" animation="wave" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Pulse Profile</p>
                <Skeleton variant="profile" animation="pulse" />
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Wave animation (default) */}
      <Skeleton variant="card" animation="wave" />
      
      {/* Pulse animation */}
      <Skeleton variant="card" animation="pulse" />
      
      {/* Animation works with all variants */}
      <Skeleton variant="profile" animation="wave" />
      <Skeleton variant="profile" animation="pulse" />
    </div>
  )
}`}
        />

        {/* Multiple Skeletons - Vertical */}
        <ComponentPreview
          title="Multiple Skeletons - Vertical"
          description="Render multiple skeleton instances in a vertical layout"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">3 Profile Skeletons</p>
                <Skeleton variant="profile" count={3} direction="vertical" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">4 Card Skeletons</p>
                <Skeleton variant="card" count={4} direction="vertical" />
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Chat list skeleton */}
      <Skeleton variant="profile" count={3} direction="vertical" />
      
      {/* Card list skeleton */}
      <Skeleton variant="card" count={4} direction="vertical" />
    </div>
  )
}`}
        />

        {/* Multiple Skeletons - Horizontal */}
        <ComponentPreview
          title="Multiple Skeletons - Horizontal"
          description="Render multiple skeleton instances in a horizontal layout"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">4 Box Skeletons</p>
                <Skeleton variant="box" count={4} direction="horizontal" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">5 Circle Skeletons</p>
                <Skeleton variant="circle" count={5} direction="horizontal" />
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Carousel skeleton */}
      <Skeleton variant="box" count={4} direction="horizontal" />
      
      {/* Avatar list skeleton */}
      <Skeleton variant="circle" count={5} direction="horizontal" />
    </div>
  )
}`}
        />

        {/* Size Options */}
        <ComponentPreview
          title="Size Options"
          description="Control skeleton dimensions with size prop"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Full Size (w-full h-full)</p>
                <BoundingBox size="lg" className="h-32">
                  <Skeleton variant="card" size="full" />
                </BoundingBox>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Full Width (w-full)</p>
                <Skeleton variant="text" size="w-full" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Full Height (h-full)</p>
                <BoundingBox size="sm" className="h-24">
                  <Skeleton variant="box" size="h-full" />
                </BoundingBox>
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Fills parent container */}
      <div className="h-32 w-full border">
        <Skeleton variant="card" size="full" />
      </div>
      
      {/* Full width, content height */}
      <Skeleton variant="text" size="w-full" />
      
      {/* Full height, content width */}
      <div className="h-24 border">
        <Skeleton variant="box" size="h-full" />
      </div>
    </div>
  )
}`}
        />

        {/* Custom Children */}
        <ComponentPreview
          title="Custom Children"
          description="Create complex skeleton layouts by passing custom children"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Complex Card Layout</p>
                <Skeleton count={2} direction="vertical">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <SkeletonCircle className="h-8 w-8" />
                      <div className="flex-1">
                        <SkeletonText lines={1} />
                      </div>
                    </div>
                    <SkeletonCard className="h-24" />
                    <div className="flex space-x-2">
                      <SkeletonBox className="h-6 w-16" />
                      <SkeletonBox className="h-6 w-12" />
                    </div>
                  </div>
                </Skeleton>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Dashboard Widget</p>
                <Skeleton count={3} direction="horizontal" gap="gap-4">
                  <div className="border rounded-lg p-4 space-y-3 w-full">
                    <SkeletonText lines={1} className="w-3/4" />
                    <SkeletonCard className="h-16" />
                    <SkeletonText lines={2} />
                  </div>
                </Skeleton>
              </div>
            </div>
          }
          code={`import { Skeleton, SkeletonCard, SkeletonBox, SkeletonCircle, SkeletonText } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Complex card layout repeated */}
      <Skeleton count={2} direction="vertical">
        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <SkeletonCircle className="h-8 w-8" />
            <div className="flex-1">
              <SkeletonText lines={1} />
            </div>
          </div>
          <SkeletonCard className="h-24" />
          <div className="flex space-x-2">
            <SkeletonBox className="h-6 w-16" />
            <SkeletonBox className="h-6 w-12" />
          </div>
        </div>
      </Skeleton>
      
      {/* Dashboard widgets */}
      <Skeleton count={3} direction="horizontal" gap="gap-4">
        <div className="border rounded-lg p-4 space-y-3 w-full">
          <SkeletonText lines={1} className="w-3/4" />
          <SkeletonCard className="h-16" />
          <SkeletonText lines={2} />
        </div>
      </Skeleton>
    </div>
  )
}`}
        />

        {/* Text Skeleton with Custom Lines */}
        <ComponentPreview
          title="Text Skeleton Customization"
          description="Customize text skeleton with different line counts"
          previewClassName="p-6"
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">1 Line</p>
                <SkeletonText lines={1} />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">3 Lines (default)</p>
                <SkeletonText lines={3} />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">5 Lines</p>
                <SkeletonText lines={5} />
              </div>
            </div>
          }
          code={`import { SkeletonText } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      <SkeletonText lines={1} />
      <SkeletonText lines={3} />
      <SkeletonText lines={5} />
    </div>
  )
}`}
        />

        {/* Real-world Examples */}
        <ComponentPreview
          title="Real-world Examples"
          description="Common skeleton patterns for different UI components"
          previewClassName="p-6"
          preview={
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-medium">Blog Post List</p>
                <Skeleton count={3} direction="vertical">
                  <div className="border rounded-lg p-4 space-y-3">
                    <SkeletonText lines={1} className="w-3/4" />
                    <SkeletonText lines={2} />
                    <div className="flex items-center space-x-3 pt-2">
                      <SkeletonCircle className="h-6 w-6" />
                      <SkeletonText lines={1} className="w-24" />
                    </div>
                  </div>
                </Skeleton>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Product Grid</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Skeleton count={6} direction="horizontal" gap="gap-0">
                    <div className="space-y-2">
                      <SkeletonCard className="aspect-square" />
                      <SkeletonText lines={1} />
                      <SkeletonText lines={1} className="w-16" />
                    </div>
                  </Skeleton>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Chat Interface</p>
                <div className="border rounded-lg p-4 space-y-4">
                  <Skeleton count={4} direction="vertical" gap="gap-3">
                    <div className="flex items-start space-x-3">
                      <SkeletonCircle className="h-8 w-8 mt-1" />
                      <div className="flex-1 space-y-2">
                        <SkeletonText lines={1} className="w-32" />
                        <SkeletonCard className="h-12 w-3/4" />
                      </div>
                    </div>
                  </Skeleton>
                </div>
              </div>
            </div>
          }
          code={`import { Skeleton, SkeletonCard, SkeletonCircle, SkeletonText } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Blog post list */}
      <Skeleton count={3} direction="vertical">
        <div className="border rounded-lg p-4 space-y-3">
          <SkeletonText lines={1} className="w-3/4" />
          <SkeletonText lines={2} />
          <div className="flex items-center space-x-3 pt-2">
            <SkeletonCircle className="h-6 w-6" />
            <SkeletonText lines={1} className="w-24" />
          </div>
        </div>
      </Skeleton>
      
      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="space-y-2">
            <SkeletonCard className="aspect-square" />
            <SkeletonText lines={1} />
            <SkeletonText lines={1} className="w-16" />
          </div>
        ))}
      </div>
      
      {/* Chat interface */}
      <div className="border rounded-lg p-4 space-y-4">
        <Skeleton count={4} direction="vertical" gap="gap-3">
          <div className="flex items-start space-x-3">
            <SkeletonCircle className="h-8 w-8 mt-1" />
            <div className="flex-1 space-y-2">
              <SkeletonText lines={1} className="w-32" />
              <SkeletonCard className="h-12 w-3/4" />
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  )
}`}
        />

        {/* API Reference */}
        <CodeExample
          title="API Reference"
          description="Complete API documentation for all skeleton components"
          code={`// Main Skeleton Component Props (uses CVA VariantProps)
interface SkeletonProps {
  count?: number                    // Number of skeleton instances (default: 1)
  direction?: 'vertical' | 'horizontal'  // Layout direction (default: 'vertical')
  variant?: 'card' | 'box' | 'circle' | 'profile' | 'text' | 'page'  // Predefined variants
  className?: string                // Additional CSS classes
  children?: React.ReactNode        // Custom skeleton content (overrides variant)
  gap?: string                      // Gap between multiple skeletons (default: 'gap-4')
  
  // CVA Props (from VariantProps<typeof skeletonVariants>)
  size?: 'full' | 'w-full' | 'h-full'    // Size behavior
  animation?: 'pulse' | 'wave'            // Animation type (default: 'wave')
}

// Individual Skeleton Component Props (all extend CVA VariantProps)
interface SkeletonComponentProps extends React.ComponentProps<'div'> & VariantProps<typeof skeletonVariants> {
  className?: string                // Additional CSS classes
  animation?: 'pulse' | 'wave'      // Animation type (default: 'wave')
  size?: 'full' | 'w-full' | 'h-full'  // Size behavior
}

// SkeletonText specific props
interface SkeletonTextProps extends SkeletonComponentProps {
  lines?: number                    // Number of text lines (default: 3)
}

// Usage Examples
<Skeleton variant="card" />                           // Single card skeleton with wave animation
<Skeleton variant="card" animation="pulse" />         // Card skeleton with pulse animation
<Skeleton variant="profile" count={3} />              // 3 profile skeletons vertically
<Skeleton variant="box" count={4} direction="horizontal" />  // 4 box skeletons horizontally
<Skeleton size="full" variant="page" />               // Full-size page skeleton
<Skeleton count={2} gap="gap-8" animation="pulse">   // Custom children with pulse animation
  <CustomSkeletonLayout />
</Skeleton>

// Individual components with animation control
<SkeletonCard className="h-40" animation="wave" />   // Custom height card with wave
<SkeletonText lines={5} animation="pulse" />         // 5 lines of text with pulse
<SkeletonProfile animation="wave" />                 // Profile with wave animation
<SkeletonPage animation="pulse" />                   // Complete page layout with pulse

// Animation Types
// - pulse: Simple opacity animation (original shadcn style)
// - wave: Shimmer effect similar to Material UI (default)`}
          language="tsx"
        />

        {/* CSS Requirements */}
        <CodeExample
          title="CSS Requirements"
          description="Add this CSS animation to your globals.css file for the wave animation to work properly"
          code={`/* Add this to your globals.css file */
@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}`}
          language="css"
        />

        {/* Installation */}
        <InstallScript componentName="skeleton" />
      </FlexColSpacing>
    </PageContainer>
  )
}

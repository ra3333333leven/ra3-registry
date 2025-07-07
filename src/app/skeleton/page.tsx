import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { CodeExample } from '@/components/(shared)/code-example'
import {
  SkeletonCard,
  SkeletonProfile,
  SkeletonRectangle,
  SkeletonSquare,
  SkeletonText,
  Skeleton,
} from '@/registry/ra3-ui/skeleton'
import { TitleDesc } from '@/registry/ra3-ui/typography'

import { getDescriptionFromRegistry, getNameFromRegistry } from '@/lib/utils'
import { FlexColSpacing, PageContainer } from '@/registry/ra3-ui/container'

export default function SkeletonPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('skeleton')}
          description={getDescriptionFromRegistry('skeleton')}
        />

        {/* Skeleton Wrapper Component */}
        <ComponentPreview
          title="Skeleton Component"
          description="Flexible wrapper component that can render multiple skeleton shapes with different layouts"
          preview={
            <div className="space-y-6 w-full">
              {/* Shape examples */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Different Shapes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="h-[140px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                    <Skeleton skeletonShape="rectangle" />
                  </div>
                  <div className="h-[140px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                    <Skeleton skeletonShape="profile" />
                  </div>
                  <div className="h-[140px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                    <Skeleton skeletonShape="card" />
                  </div>
                </div>
              </div>

              {/* Count examples */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Multiple Count - Vertical Layout
                </h3>
                <div className="h-[200px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <Skeleton skeletonShape="profile" count={3} />
                </div>
              </div>

              {/* Direction examples */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Multiple Count - Horizontal Layout
                </h3>
                <div className="h-[100px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <Skeleton
                    skeletonShape="square"
                    count={4}
                    direction="horizontal"
                  />
                </div>
              </div>

              {/* Custom children */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Custom Skeleton with Children
                </h3>
                <div className="h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <Skeleton count={2} direction="horizontal">
                    <div className="flex items-center gap-4 p-3 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                          <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" />
                          <div className="h-3 bg-gray-200 rounded animate-pulse w-16" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded animate-pulse" />
                          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5" />
                        </div>
                      </div>
                    </div>
                  </Skeleton>
                </div>
              </div>
            </div>
          }
          code={`import { Skeleton } from '@/components/skeleton'

export default function Example() {
  return (
    <div className="space-y-6">
      {/* Single shapes */}
      <div className="h-[100px]">
        <Skeleton skeletonShape="profile" />
      </div>

      {/* Multiple vertical */}
      <div className="h-[200px]">
        <Skeleton skeletonShape="profile" count={3} />
      </div>

      {/* Multiple horizontal */}
      <div className="h-[100px]">
        <Skeleton skeletonShape="square" count={4} direction="horizontal" />
      </div>

      {/* Custom skeleton */}
      <div className="h-[120px]">
        <Skeleton count={2} direction="horizontal">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  )
}`}
        />

        {/* Base Skeleton Components */}
        <ComponentPreview
          title="Base Skeleton Components"
          description="Basic skeleton components that automatically resize based on their parent container"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  SkeletonRectangle
                </h3>
                <div className="h-[100px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonRectangle />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  SkeletonSquare
                </h3>
                <div className="h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonSquare />
                </div>
              </div>
            </div>
          }
          code={`import { SkeletonRectangle, SkeletonSquare } from '@/components/skeleton'

export default function Example() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-[100px]">
        <SkeletonRectangle />
      </div>
      <div className="h-[120px]">
        <SkeletonSquare />
      </div>
    </div>
  )
}`}
        />

        {/* SkeletonText Demo */}
        <ComponentPreview
          title="SkeletonText Component"
          description="Text skeleton with configurable line count that fills available space"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  1 Line
                </h3>
                <div className="h-[40px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonText count={1} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  3 Lines
                </h3>
                <div className="h-[80px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonText count={3} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  5 Lines
                </h3>
                <div className="h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonText count={5} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  2 Lines (Tall Container)
                </h3>
                <div className="h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonText count={2} />
                </div>
              </div>
            </div>
          }
          code={`import { SkeletonText } from '@/components/skeleton'

export default function Example() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Single line */}
      <div className="h-[40px]">
        <SkeletonText count={1} />
      </div>
      
      {/* Multiple lines */}
      <div className="h-[80px]">
        <SkeletonText count={3} />
      </div>
      
      {/* Many lines */}
      <div className="h-[120px]">
        <SkeletonText count={5} />
      </div>
      
      {/* Tall container */}
      <div className="h-[120px]">
        <SkeletonText count={2} />
      </div>
    </div>
  )
}`}
        />

        {/* SkeletonCard Variations */}
        <ComponentPreview
          title="SkeletonCard Variations"
          description="Card skeleton component with customizable text content"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Default (2 lines)
                </h3>
                <div className="h-[250px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonCard skeletonText />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Custom text (3 lines)
                </h3>
                <div className="h-[250px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonCard skeletonText={{ count: 3 }} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  No text
                </h3>
                <div className="h-[250px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonCard />
                </div>
              </div>
            </div>
          }
          code={`import { SkeletonCard } from '@/components/skeleton'

export default function Example() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Default with 2 lines of text */}
      <div className="h-[250px]">
        <SkeletonCard skeletonText />
      </div>
      
      {/* Custom text lines */}
      <div className="h-[250px]">
        <SkeletonCard skeletonText={{ count: 4 }} />
      </div>
      
      {/* No text */}
      <div className="h-[250px]">
        <SkeletonCard />
      </div>
    </div>
  )
}`}
        />

        {/* SkeletonProfile Demo */}
        <ComponentPreview
          title="SkeletonProfile Component"
          description="Profile skeleton with avatar and text content that adapts to container size"
          preview={
            <div className="space-y-6">
              {/* Small container */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Small Container
                </h3>
                <div className="w-[200px] h-[80px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-2">
                  <SkeletonProfile />
                </div>
              </div>

              {/* Medium container with custom text */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Medium Container with 3 text lines
                </h3>
                <div className="w-[400px] h-[120px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-3">
                  <SkeletonProfile skeletonText={{ count: 3 }} />
                </div>
              </div>

              {/* Large container */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Large Container
                </h3>
                <div className="w-[600px] h-[160px] border-2 border-dashed border-muted-foreground/30 rounded-lg p-4">
                  <SkeletonProfile skeletonText />
                </div>
              </div>
            </div>
          }
          code={`import { SkeletonProfile } from '@/components/skeleton'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Small profile */}
      <div className="w-[200px] h-[80px]">
        <SkeletonProfile />
      </div>
      
      {/* Medium with custom text */}
      <div className="w-[400px] h-[120px]">
        <SkeletonProfile skeletonText={{ count: 3 }} />
      </div>
      
      {/* Responsive */}
      <div className="w-full h-[200px]">
        <SkeletonProfile />
      </div>
    </div>
  )
}`}
        />

        {/* Custom Skeleton with Modifiers */}
        <CodeExample
          title="Custom Skeleton with Wrapper Modifiers"
          description="Use the Skeleton wrapper to repeat custom skeleton content with count and direction modifiers"
          code={`import { Skeleton } from '@/components/skeleton'

// Custom skeleton repeated 3 times vertically
<Skeleton count={3} direction="vertical">
  <div className="flex gap-3">
    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
    <div className="flex-1 space-y-2">
      <div className="h-3 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
    </div>
  </div>
</Skeleton>

// Custom skeleton repeated 4 times horizontally
<Skeleton count={4} direction="horizontal">
  <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse" />
</Skeleton>`}
        />

        {/* Custom Gap with className */}
        <CodeExample
          title="Customizing Gap with className"
          description="Use className to modify the gap between skeleton items by overriding the container styles"
          code={`import { Skeleton } from '@/components/skeleton'

// Custom gap using className (overrides default gap-2)
<Skeleton 
  skeletonShape="profile" 
  count={3} 
  direction="vertical"
  className="gap-6"
/>

// Custom gap for horizontal layout
<Skeleton 
  skeletonShape="square" 
  count={4} 
  direction="horizontal"
  className="gap-8"
/>

// No gap
<Skeleton 
  skeletonShape="rectangle" 
  count={2} 
  direction="horizontal"
  className="gap-0"
/>`}
        />

        {/* Complete Usage Guide */}
        <CodeExample
          title="Complete Usage Guide"
          description="Best practices for using the Skeleton component system"
          code={`import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonProfile, 
  SkeletonText,
  SkeletonRectangle,
  SkeletonSquare 
} from '@/components/skeleton'

// 1. Use Skeleton component for simple shapes (recommended)
<Skeleton skeletonShape="profile" />
<Skeleton skeletonShape="card" count={3} />
<Skeleton skeletonShape="rectangle" count={2} direction="horizontal" />

// 2. Use Skeleton as wrapper for custom skeletons
<Skeleton count={3} direction="vertical">
  <div className="flex gap-2">
    <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
    <div className="flex-1 space-y-1">
      <div className="h-3 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
    </div>
  </div>
</Skeleton>

// 3. Use base shapes for composition when you need customization
<Skeleton count={2} direction="horizontal">
  <div className="space-y-3">
    <SkeletonProfile skeletonText={{ count: 3 }} />
    <SkeletonCard skeletonText={{ count: 1 }} />
  </div>
</Skeleton>

// 4. Use base shapes directly only when building complex custom layouts
<div className="grid grid-cols-2 gap-4">
  <div className="h-[100px]">
    <SkeletonRectangle />
  </div>
  <div className="space-y-2">
    <SkeletonText count={3} />
  </div>
</div>

// RULE OF THUMB:
// - Almost always use <Skeleton> component
// - Use skeletonShape prop for built-in shapes
// - Use children for custom skeleton content
// - Use base shapes as children when you need their props
// - Use base shapes directly only for complex custom layouts`}
        />

        {/* Installation */}
        <InstallScript componentName="skeleton" />
      </FlexColSpacing>
    </PageContainer>
  )
}

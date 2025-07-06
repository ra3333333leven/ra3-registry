import { ComponentPreview } from '@/components/(shared)/component-preview'
import { CodeExample } from '@/components/(shared)/code-example'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import {
  SkeletonProfile,
  SkeletonText,
  SkeletonCard,
  SkeletonRectangle,
  SkeletonSquare,
} from '@/registry/ra3-ui/skeleton'

import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

export default function SkeletonPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('skeleton')}
          description={getDescriptionFromRegistry('skeleton')}
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

        {/* Installation */}
        <InstallScript componentName="skeleton" />
      </FlexColSpacing>
    </PageContainer>
  )
}

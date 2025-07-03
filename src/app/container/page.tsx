import { ComponentPreview } from '@/components/(shared)/component-preview'
import { CodeExample } from '@/components/(shared)/code-example'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { BoundingBox } from '@/components/(shared)/bounding-box'
import {
  PageContainer,
  FlexColSpacing,
  FullPage,
  YPadding,
  FixedWidth,
} from '@/registry/ra3-ui/container'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

export default function ContainerPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('container')}
          description={getDescriptionFromRegistry('container')}
        />
        {/* FullPage Component Demo */}
        <ComponentPreview
          title="FullPage"
          description="Full height and width container - ideal for full-screen layouts and hero sections"
          previewClassName="p-6"
          preview={
            <BoundingBox size="4xl" label="Parent Container">
              <FullPage debug className="bg-blue-50 dark:bg-blue-950/20">
                <div className="p-4">
                  <p className="text-sm">
                    This FullPage container takes full width and height of its
                    parent
                  </p>
                </div>
              </FullPage>
            </BoundingBox>
          }
          code={`import { FullPage } from '@/components/ui/container'

export default function Example() {
  return (
    <FullPage>
      <div className="p-4">
        <h1>Full page content</h1>
      </div>
    </FullPage>
  )
}`}
        />

        {/* Recommended Layout Pattern */}
        <CodeExample
          title="Recommended Layout Pattern"
          description="I recommend setting h-dvh and w-dvw on the root layout so you don't have to repeat it"
          code={`
// layout.tsx - Set viewport units at the root level
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          // Set viewport units here
          <main className="h-dvh w-dvw overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

// All child components just have to use h-full w-full to get full screen coverage
export default function Page() {
  return (
    <FullPage> {/* Uses h-full w-full internally */}
      <div>Your full-screen content</div>
    </FullPage>
  )
}

// Why use h-dvh and w-dvw?
// - Accomodates mobile browsers with address bar and other UI eleemnts
`}
          language="tsx"
          className="h-fit"
        />

        {/* YPadding Component Demo */}
        <ComponentPreview
          title="YPadding"
          description="Adds consistent vertical padding - maintains full height while adding top/bottom spacing"
          previewClassName="p-6"
          preview={
            <BoundingBox size="4xl" label="Parent Container">
              <YPadding
                debug
                className="bg-green-50 dark:bg-green-950/20 md:py-6 md:px-0 w-full h-full"
              >
                <div className="bg-white dark:bg-gray-800 p-2 rounded w-full h-full">
                  <p className="text-sm">Content with Y padding applied</p>
                </div>
              </YPadding>
            </BoundingBox>
          }
          code={`import { YPadding } from '@/components/ui/container'

export default function Example() {
  return (
    <YPadding>
      <div>Content with consistent vertical padding</div>
    </YPadding>
  )
}`}
        />

        {/* FixedWidth Component Demo */}
        <ComponentPreview
          title="FixedWidth"
          description="Responsive width container - full width on mobile, max-width constraint on larger screens"
          previewClassName="p-6"
          preview={
            <BoundingBox
              size="4xl"
              label="Parent Container"
              className="bg-gray-50 dark:bg-gray-900 p-4"
            >
              <FixedWidth
                debug
                className="bg-purple-50 dark:bg-purple-950/20 md:px-0"
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded">
                  <p className="text-sm">
                    This content is constrained to a fixed width on larger
                    screens, and has padding on smaller ones
                  </p>
                </div>
              </FixedWidth>
            </BoundingBox>
          }
          code={`import { FixedWidth } from '@/components/ui/container'

export default function Example() {
  return (
    <FixedWidth>
      <div>Content with responsive width constraints</div>
    </FixedWidth>
  )
}`}
        />

        {/* FlexColSpacing Component Demo */}
        <ComponentPreview
          title="FlexColSpacing"
          description="Flexible column layout with consistent spacing between elements"
          previewClassName="p-6"
          preview={
            <BoundingBox size="5xl" label="Parent Container" className="p-4">
              <FlexColSpacing
                debug
                className="bg-orange-50 dark:bg-orange-950/20"
              >
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-sm font-medium">Item 1</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-sm font-medium">Item 2</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="text-sm font-medium">Item 3</p>
                </div>
              </FlexColSpacing>
            </BoundingBox>
          }
          code={`import { FlexColSpacing } from '@/components/ui/container'

export default function Example() {
  return (
    <FlexColSpacing>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </FlexColSpacing>
  )
}`}
        />

        {/* PageContainer Component Demo */}
        <ComponentPreview
          title="PageContainer"
          description="Complete page layout wrapper - combines FullPage, YPadding, and FixedWidth"
          previewClassName="p-6"
          preview={
            <BoundingBox size="5xl" label="Parent Container">
              <FullPage className="bg-red-50 dark:bg-red-950/20">
                <YPadding className="md:py-6">
                  <FixedWidth className="md:px-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h3 className="font-semibold mb-2">
                        Complete Page Layout
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        This combines the components to center the content
                        consistently
                      </p>
                    </div>
                  </FixedWidth>
                </YPadding>
              </FullPage>
            </BoundingBox>
          }
          code={`import { PageContainer } from '@/components/ui/container'

export default function Example() {
  return (
    <PageContainer>
      <div>Your page content here</div>
    </PageContainer>
  )
}`}
        />

        {/* Configuration Constants */}
        <CodeExample
          title="Configuration Constants"
          description="Customize spacing and sizing across your project with these configurable constants"
          code={`// Configuration constants for consistent spacing and sizing
const WIDTH = 'px-4 md:max-w-5xl mx-auto' // Maximum width constraint
const Y_PADDING = 'pt-4 pb-32 md:p-32'   // Vertical padding for sections
const FLEX_COL_GAP = 'gap-8'              // Gap spacing for flex layouts

// Debug Styles
const DEBUG_BORDER = 'border-2 border-red-500' // Debug border styling
const DEFAULT_DEBUG = false                     // Default debug state`}
          language="tsx"
        />

        {/* Composition Patterns */}
        <CodeExample
          title="Composition Patterns"
          description="Common patterns for building scalable and consistent layouts"
          code={`// Pattern 1: Standard Page Layout
<PageContainer>
  <FlexColSpacing>
    <header>Page Header</header>
    <main>Main Content</main>
    <footer>Page Footer</footer>
  </FlexColSpacing>
</PageContainer>

// Pattern 2: Hero Section with Content
<FullPage>
  <YPadding>
    <FlexColSpacing>
      <div className="text-center">
        <h1>Hero Title</h1>
        <p>Hero description</p>
      </div>
      <FixedWidth>
        <div>Constrained content below hero</div>
      </FixedWidth>
    </FlexColSpacing>
  </YPadding>
</FullPage>

// Pattern 3: Nested Layouts for Complex Pages
<PageContainer>
  <FlexColSpacing>
    <section>
      <FixedWidth>
        <h2>Section Title</h2>
      </FixedWidth>
      <FullPage className="bg-muted">
        <YPadding>
          <FixedWidth>
            <FlexColSpacing>
              <div>Card 1</div>
              <div>Card 2</div>
            </FlexColSpacing>
          </FixedWidth>
        </YPadding>
      </FullPage>
    </section>
  </FlexColSpacing>
</PageContainer>`}
          language="tsx"
        />

        {/* Installation */}
        <InstallScript componentName="container" />
      </FlexColSpacing>
    </PageContainer>
  )
}

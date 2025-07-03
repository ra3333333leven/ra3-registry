import { CodeExample } from '@/components/(shared)/code-example'
import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { getDescriptionFromRegistry, getNameFromRegistry } from '@/lib/utils'
import {
  FixedWidth,
  FlexColSpacing,
  FullPage,
  PageContainer,
  YPadding,
} from '@/registry/ra3-ui/container'
import { PlaceholderSkeletonPage } from '@/registry/ra3-ui/placeholder'
import { TitleDesc } from '@/registry/ra3-ui/typography'

export default function PlaceholderPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('placeholder')}
          description={getDescriptionFromRegistry('placeholder')}
        />

        {/* PlaceholderSkeletonPage Component Demo */}
        <ComponentPreview
          title="PlaceholderSkeletonPage"
          description="A skeleton loading placeholder with optional title and description"
          previewClassName="h-[500px]"
          preview={<PlaceholderSkeletonPage />}
          code={`import { PlaceholderSkeletonPage } from '@/components/ui/placeholder'

export default function Example() {
  return <PlaceholderSkeletonPage />
}`}
        />

        {/* PlaceholderSkeletonPage with Title and Description Demo */}
        <ComponentPreview
          title="with Title and Description"
          description="The skeleton page can display a title and description when provided"
          previewClassName="h-[500px]"
          preview={
            <PlaceholderSkeletonPage
              title="Dashboard Loading"
              desc="Please wait while we load your dashboard content..."
            />
          }
          code={`import { PlaceholderSkeletonPage } from '@/components/ui/placeholder'

export default function Example() {
  return (
    <PlaceholderSkeletonPage 
      title="Dashboard Loading"
      desc="Please wait while we load your dashboard content..."
    />
  )
}`}
        />

        {/* PlaceholderOverflowContent Component Demo */}
        <ComponentPreview
          title="PlaceholderOverflowContent"
          description="A content-rich placeholder page with lorem ipsum content for demonstrating layouts and scrolling behavior"
          previewClassName="h-[700px]"
          preview={
            <FullPage>
              <YPadding className="md:py-8">
                <FixedWidth className="px-10">
                  <TitleDesc
                    title="Placeholder Content  "
                    description="This is a placeholder page with overflow content to demonstrate scrolling behavior."
                  />

                  {/* Generate lots of lorem ipsum content to test scrolling */}
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className="mt-6 mb-8 p-6 bg-card rounded-lg border"
                    >
                      <h2 className="text-2xl font-semibold mb-4">
                        Lorem Ipsum Section {i + 1}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p className="text-muted-foreground">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  ))}
                </FixedWidth>
              </YPadding>
            </FullPage>
          }
          code={`import { PlaceholderOverflowContent } from '@/components/ui/placeholder'

export default function Example() {
  return <PlaceholderOverflowContent />
}`}
        />

        {/* Configuration Example */}
        <CodeExample
          title="Configuring Content Count"
          description="The PlaceholderOverflowContent component accepts a count prop to control the number of content sections generated"
          code={`import { PlaceholderOverflowContent } from '@/components/ui/placeholder'

// Default count (7 sections)
export function DefaultPlaceholder() {
  return <PlaceholderOverflowContent />
}

// Long content for extensive scrolling demos
export function LongContentPlaceholder() {
  return (
    <PlaceholderOverflowContent
      count={15}
    />
  )
}`}
          language="tsx"
        />

        {/* Installation */}
        <InstallScript componentName="placeholder" />
      </FlexColSpacing>
    </PageContainer>
  )
}

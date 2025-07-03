import { CodeExample } from '@/components/(shared)/code-example'
import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { getDescriptionFromRegistry, getNameFromRegistry } from '@/lib/utils'
import {
  FlexColSpacing,
  FullPage,
  PageContainer,
} from '@/registry/ra3-ui/container'
import {
  PlaceholderContentPage,
  PlaceholderSkeletonPage,
} from '@/registry/ra3-ui/placeholder'
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
          description="A skeleton loading placeholder for when content is not available - perfect for loading states"
          preview={
            <FullPage className="h-full w-full">
              <PlaceholderSkeletonPage />
            </FullPage>
          }
          code={`import { PlaceholderSkeletonPage } from '@/components/ui/placeholder'

export default function Example() {
  return <PlaceholderSkeletonPage />
}`}
        />

        {/* PlaceholderSkeletonPage with Children Demo */}
        <ComponentPreview
          title="PlaceholderSkeletonPage with Children"
          description="The skeleton page can overlay children content for loading states with messages"
          preview={
            <FullPage className="h-full w-full">
              <PlaceholderSkeletonPage>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">Loading content...</p>
                </div>
              </PlaceholderSkeletonPage>
            </FullPage>
          }
          code={`import { PlaceholderSkeletonPage } from '@/components/ui/placeholder'

export default function Example() {
  return (
    <PlaceholderSkeletonPage>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <p className="text-sm font-medium">Loading content...</p>
      </div>
    </PlaceholderSkeletonPage>
  )
}`}
        />

        {/* PlaceholderContentPage Component Demo */}
        <ComponentPreview
          title="PlaceholderContentPage"
          description="A content-rich placeholder page for demonstrating layouts and scrolling behavior"
          preview={
            <FullPage className="h-full w-full overflow-auto">
              <PlaceholderContentPage />
            </FullPage>
          }
          code={`import { PlaceholderContentPage } from '@/components/ui/placeholder'

export default function Example() {
  return <PlaceholderContentPage />
}`}
        />

        {/* Usage Patterns */}
        <CodeExample
          title="Usage Patterns"
          description="Common patterns for using placeholder components in different scenarios"
          code={`// Pattern 1: Loading State
const [isLoading, setIsLoading] = useState(true)

return (
  <>
    {isLoading ? (
      <PlaceholderSkeletonPage>
        <div>Loading your dashboard...</div>
      </PlaceholderSkeletonPage>
    ) : (
      <YourActualContent />
    )}
  </>
)

// Pattern 2: Development Placeholder
export default function UnfinishedPage() {
  return (
    <PlaceholderContentPage />
  )
}

// Pattern 3: Error State with Skeleton
export default function ErrorPage() {
  return (
    <PlaceholderSkeletonPage>
      <div className="text-center">
        <h2>Something went wrong</h2>
        <button>Try again</button>
      </div>
    </PlaceholderSkeletonPage>
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

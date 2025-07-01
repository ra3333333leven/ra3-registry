import { DemoPage } from '@/components/(shared)/demo-page'
import { Spinner, LoadingPage } from '@/registry/ra3-ui/loading'

const codeExample = `import { Spinner, LoadingPage } from '@/components/ui/loading'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Spinner sizes */}
      <div className="flex gap-4 items-center">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
      
      {/* Spinner with text */}
      <Spinner size="md">
        <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
      </Spinner>
      
      {/* Hidden spinner */}
      <Spinner show={false} />
      
      {/* Full page loading */}
      <div className="h-32 relative border rounded-lg overflow-hidden">
        <LoadingPage className="!h-full !w-full" />
      </div>
    </div>
  )
}`

export default function LoadingPageDemo() {
  return (
    <DemoPage
      componentName="Loading"
      componentDescription="Loading components including a configurable spinner and full-page loading screen with different sizes and states."
      previewContent={
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-medium mb-3">Spinner Sizes</h4>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="text-xs text-muted-foreground mt-1">Small</p>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <p className="text-xs text-muted-foreground mt-1">Medium</p>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <p className="text-xs text-muted-foreground mt-1">Large</p>
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
            <h4 className="text-sm font-medium mb-3">Full Page Loading</h4>
            <div className="h-32 relative border rounded-lg overflow-hidden bg-background">
              <LoadingPage className="!h-full !w-full" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Hidden State</h4>
            <div className="flex items-center gap-4">
              <Spinner show={true} size="sm" />
              <span className="text-sm text-muted-foreground">Visible</span>
              <Spinner show={false} size="sm" />
              <span className="text-sm text-muted-foreground">Hidden</span>
            </div>
          </div>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="loading"
    />
  )
}

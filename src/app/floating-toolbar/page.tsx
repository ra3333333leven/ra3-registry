import { DemoPage } from '@/components/(shared)/demo-page'
import { getDescriptionFromRegistry, getNameFromRegistry } from '@/lib/utils'
import { FloatingToolbar } from '@/registry/ra3-ui/floating-toolbar'

export default function FloatingToolbarPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('floating-toolbar')}
      componentDescription={getDescriptionFromRegistry('floating-toolbar')}
      previewContent={
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center">
              <FloatingToolbar className="static w-fit" />
              <p className="text-muted-foreground text-sm max-w-md">
                The floating toolbar combines search (⌘K) and sidebar toggle.
                <br />
                Try pressing <kbd className="bg-muted px-1 rounded">⌘K</kbd> to
                open the command palette!
              </p>
            </div>
          </div>
        </div>
      }
      codeExample={`import { FloatingToolbar } from '@/components/floating-toolbar'

export function Example() {
  return (
    <FloatingToolbar
      disappearWhenSidebarOpen
      highlightWhenSidebarOpen
    />
  )
}`}
      installScriptComponentName="floating-toolbar"
    />
  )
}

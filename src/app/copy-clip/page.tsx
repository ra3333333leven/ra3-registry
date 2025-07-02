import { DemoPage } from '@/components/(shared)/demo-page'
import { CopyClip } from '@/registry/ra3-ui/copy-clip'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

const codeExample = `import { CopyClip } from '@/components/ui/copy-clip'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Standalone button */}
      <CopyClip textToCopy="Hello, World!" />
      
      {/* With custom content */}
      <CopyClip textToCopy="This is some text to copy">
        <div className="p-4 bg-muted rounded-lg cursor-pointer">
          <p>Click anywhere to copy this text</p>
        </div>
      </CopyClip>
      
      {/* Different variants */}
      <CopyClip 
        textToCopy="Button variant example" 
        variant="outline" 
        size="lg"
      />
    </div>
  )
}`

export default function CopyClipPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('copy-clip')}
      componentDescription={getDescriptionFromRegistry('copy-clip')}
      previewContent={
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-sm">Standalone button:</span>
            <CopyClip textToCopy="Hello, World!" />
          </div>

          <div className="space-y-2">
            <span className="text-sm">With custom content:</span>
            <CopyClip textToCopy="This is some text to copy">
              <div className="p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                <p className="text-sm">Click anywhere to copy this text</p>
                <p className="text-xs text-muted-foreground">
                  Hover to see the copy icon
                </p>
              </div>
            </CopyClip>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">Button variants:</span>
            <CopyClip textToCopy="Default variant" variant="default" />
            <CopyClip textToCopy="Outline variant" variant="outline" />
            <CopyClip textToCopy="Secondary variant" variant="secondary" />
          </div>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="copy-clip"
    />
  )
}

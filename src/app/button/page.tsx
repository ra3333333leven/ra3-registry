import { DemoPage } from '@/components/(shared)/demo-page'
import { Button } from '@/registry/ra3-ui/button'

const codeExample = `import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Different variants */}
      <div className="flex gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      
      {/* Different sizes */}
      <div className="flex gap-2 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">🚀</Button>
      </div>
      
      {/* Disabled state */}
      <Button disabled>Disabled</Button>
    </div>
  )
}`

export default function ButtonPage() {
  return (
    <DemoPage
      componentName="Button"
      componentDescription="A customizable button component built on top of shadcn/ui with all the standard variants and sizes."
      previewContent={
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Sizes</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">States</h4>
            <div className="flex gap-2">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="button"
    />
  )
}

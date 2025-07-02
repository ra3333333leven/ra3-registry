import { DemoPage } from '@/components/(shared)/demo-page'
import { ThemeDropdown } from '@/registry/ra3-ui/theme-dropdown'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

const codeExample = `import { ThemeDropdown } from '@/components/ui/theme-dropdown'

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <span>Choose theme:</span>
      <ThemeDropdown />
    </div>
  )
}`

export default function ThemeDropdownPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('theme-dropdown')}
      componentDescription={getDescriptionFromRegistry('theme-dropdown')}
      previewContent={
        <div className="flex items-center gap-4">
          <span className="text-sm">Choose theme:</span>
          <ThemeDropdown />
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="theme-dropdown"
    />
  )
}

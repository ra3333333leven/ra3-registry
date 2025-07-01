import { DemoPage } from '@/components/(shared)/demo-page'
import { ThemeDropdown } from '@/registry/ra3-ui/theme-dropdown'

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
      componentName="ThemeDropdown"
      componentDescription="A dropdown menu for selecting between light, dark, and system theme preferences with animated icons."
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

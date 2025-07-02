'use client'

import { DemoPage } from '@/components/(shared)/demo-page'
import { ThemeToggle } from '@/registry/ra3-ui/theme-toggle'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

// Separate client component for the preview content
function ThemeTogglePreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-sm">Basic toggle:</span>
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm">With border:</span>
        <ThemeToggle className="border border-border" />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm">Custom content:</span>
        <ThemeToggle>
          {({ theme, mounted }) => (
            <div className="flex items-center gap-2">
              {mounted && theme === 'dark' ? '🌞' : '🌙'}
              <span className="text-sm">
                {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
              </span>
            </div>
          )}
        </ThemeToggle>
      </div>
    </div>
  )
}

const codeExample = `import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Example() {
  return (
    <div className="space-y-4">
      {/* Basic theme toggle */}
      <ThemeToggle />
      
      {/* With custom styling */}
      <ThemeToggle className="border border-border" />
      
      {/* With custom children */}
      <ThemeToggle>
        {({ theme, mounted }) => (
          <div className="flex items-center gap-2">
            {mounted && theme === 'dark' ? '🌞' : '🌙'}
            <span className="text-sm">
              {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
            </span>
          </div>
        )}
      </ThemeToggle>
    </div>
  )
}`

export default function ThemeTogglePage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('theme-toggle')}
      componentDescription={getDescriptionFromRegistry('theme-toggle')}
      previewContent={<ThemeTogglePreview />}
      codeExample={codeExample}
      installScriptComponentName="theme-toggle"
    />
  )
}

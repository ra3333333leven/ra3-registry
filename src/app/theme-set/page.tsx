'use client'

import { DemoPage } from '@/components/(shared)/demo-page'
import { ThemeToggle } from '@/registry/ra3-ui/theme-toggle'
import { ThemeDropdown } from '@/registry/ra3-ui/theme-dropdown'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

// Separate client component for the preview content
function ThemeSetPreview() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Theme Toggle</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Basic toggle:</span>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">With border:</span>
          <ThemeToggle className="border border-border" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Theme Dropdown</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Dropdown menu:</span>
          <ThemeDropdown />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Combined Usage</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Toggle and Dropdown:</span>
          <ThemeToggle />
          <ThemeDropdown />
        </div>
      </div>
    </div>
  )
}

const codeExample = `import { ThemeProvider } from '@/components/ui/theme-provider'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { ThemeDropdown } from '@/components/ui/theme-dropdown'

// 1. Wrap your app with ThemeProvider (usually in layout.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// 2. Use theme components anywhere in your app
export default function Example() {
  return (
    <div className="space-y-4">
      {/* Simple toggle button */}
      <ThemeToggle />
      
      {/* Dropdown with all options */}
      <ThemeDropdown />
      
      {/* Use together */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ThemeDropdown />
      </div>
    </div>
  )
}`

export default function ThemeSetPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('theme-set')}
      componentDescription={getDescriptionFromRegistry('theme-set')}
      previewContent={<ThemeSetPreview />}
      codeExample={codeExample}
      installScriptComponentName="theme-set"
    />
  )
}

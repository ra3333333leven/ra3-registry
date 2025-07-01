import { DemoPage } from '@/components/(shared)/demo-page'

const codeExample = `import { ThemeProvider } from '@/components/ui/theme-provider'

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
}`

export default function ThemeProviderPage() {
  return (
    <DemoPage
      componentName="ThemeProvider"
      componentDescription="A wrapper component that provides theme context to your application using next-themes."
      previewContent={
        <div className="p-6 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold mb-2">Theme Provider</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This component wraps your app to provide theme functionality.
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Current theme:</strong>{' '}
              <span className="font-mono">system</span>
            </div>
            <div>
              <strong>Supports:</strong> light, dark, system
            </div>
            <div>
              <strong>Attribute:</strong> class-based
            </div>
          </div>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="theme-provider"
    />
  )
}

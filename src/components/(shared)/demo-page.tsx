import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer } from '@/registry/ra3-ui/container'

interface DemoPageProps {
  componentName: string
  componentDescription: string
  previewContent: React.ReactNode
  codeExample: string
  installScriptComponentName: string
}

export function DemoPage({
  componentName,
  componentDescription,
  previewContent,
  codeExample,
  installScriptComponentName,
}: DemoPageProps) {
  return (
    <PageContainer>
      <div className="flex flex-col h-full w-full gap-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{componentName}</h1>
          <p className="text-xl text-muted-foreground">
            {componentDescription}
          </p>
        </div>

        <ComponentPreview
          preview={previewContent}
          code={codeExample}
          className=""
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <InstallScript componentName={installScriptComponentName} />
        </div>
      </div>
    </PageContainer>
  )
}

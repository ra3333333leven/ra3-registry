import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { TitleDesc } from '@/components/(shared)/title-desc'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'

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
      <FlexColSpacing>
        <TitleDesc title={componentName} description={componentDescription} />
        <ComponentPreview preview={previewContent} code={codeExample} />
        <InstallScript componentName={installScriptComponentName} />
      </FlexColSpacing>
    </PageContainer>
  )
}

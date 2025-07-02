import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { TitleDesc } from '@/components/(shared)/typography'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'

interface DemoPageProps {
  componentName: string
  componentDescription: string
  previewContent: React.ReactNode
  codeExample: string
  installScriptComponentName: string
  children?: React.ReactNode
}

export function DemoPage({
  componentName,
  componentDescription,
  previewContent,
  codeExample,
  installScriptComponentName,
  children,
}: DemoPageProps) {
  return (
    <PageContainer>
      <FlexColSpacing>
        <TitleDesc title={componentName} description={componentDescription} />
        <ComponentPreview preview={previewContent} code={codeExample} />
        <InstallScript componentName={installScriptComponentName} />
        {children}
      </FlexColSpacing>
    </PageContainer>
  )
}

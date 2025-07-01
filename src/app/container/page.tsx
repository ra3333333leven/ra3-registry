import { DemoPage } from '@/components/(shared)/demo-page'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'

const codeExample = `import { 
  PageContainer, 
  FlexColSpacing, 
  FullPage, 
  YPadding, 
  FixedWidth 
} from '@/components/ui/container'

export default function Example() {
  return (
    <PageContainer>
      <FlexColSpacing>
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Content Block 1</h2>
          <p>This is inside a PageContainer with FlexColSpacing.</p>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Content Block 2</h2>
          <p>Notice the consistent spacing between elements.</p>
        </div>
      </FlexColSpacing>
    </PageContainer>
  )
}`

export default function ContainerPage() {
  return (
    <DemoPage
      componentName="Container"
      componentDescription="A collection of responsive container components for consistent page layouts and spacing."
      previewContent={
        <div className="w-full max-w-2xl border rounded-lg overflow-hidden">
          <PageContainer className="h-64">
            <FlexColSpacing>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-sm font-semibold">Content Block 1</h3>
                <p className="text-xs text-muted-foreground">
                  PageContainer with FlexColSpacing
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-sm font-semibold">Content Block 2</h3>
                <p className="text-xs text-muted-foreground">
                  Consistent spacing between elements
                </p>
              </div>
            </FlexColSpacing>
          </PageContainer>
        </div>
      }
      codeExample={codeExample}
      installScriptComponentName="container"
    />
  )
}

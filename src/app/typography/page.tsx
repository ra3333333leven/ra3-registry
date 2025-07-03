import { ComponentPreview } from '@/components/(shared)/component-preview'
import { InstallScript } from '@/components/(shared)/install-script'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { TitleDesc, HeaderDesc, Text } from '@/registry/ra3-ui/typography'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { Separator } from '@/components/ui/separator'

const componentName = 'typography'

export default function TypographyPage() {
  const name = getNameFromRegistry(componentName)
  const description = getDescriptionFromRegistry(componentName)

  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc title={name} description={description} />

        {/* TitleDesc and HeaderDesc Component Demo */}
        <ComponentPreview
          title="TitleDesc & HeaderDesc"
          description="Page titles and section headers with optional descriptions and alignment control"
          previewClassName="p-6"
          preview={
            <div className="space-y-8 w-full">
              <TitleDesc
                title="Main Page Title"
                description="This is a description that appears below the main title. It provides context and additional information about the page content."
              />
              <Separator />

              <HeaderDesc
                header="Section Header"
                description="This is a smaller header used for sections within a page. It has a more compact spacing and smaller text size."
              />
              <Separator />

              <div className="space-y-4">
                <TitleDesc title="Title Only Example" />
                <Separator />

                <HeaderDesc description="Description Only Example" />
              </div>
            </div>
          }
          code={`import { TitleDesc, HeaderDesc } from '@/registry/ra3-ui/typography'

export function Example() {
  return (
    <div className="space-y-8">
      <TitleDesc
        title="Main Page Title"
        description="This is a description that appears below the main title."
      />
      
      <HeaderDesc
        header="Section Header"
        description="This is a smaller header used for sections."
      />
      
      {/* Optional props - you can use just title or just description */}
      <TitleDesc title="Title Only Example" />
      <HeaderDesc description="Description Only Example" />
    </div>
  )
}`}
        />

        {/* Text Component Demo */}
        <ComponentPreview
          title="Text"
          description="Flexible text component with typography presets for different use cases"
          previewClassName="p-6"
          preview={
            <div className="space-y-6 w-full">
              <div className="space-y-2">
                <Text variant="headline" as="h2" className="text-2xl font-bold">
                  Hero Headlines (headline)
                </Text>
                <Text variant="headline" className="text-lg">
                  Compact, impactful headlines that grab attention without
                  wasting space. The tight spacing creates urgency and focus.
                </Text>
              </div>

              <div className="space-y-2">
                <Text
                  variant="premium"
                  as="h3"
                  className="text-xl font-semibold"
                >
                  Premium Content (premium)
                </Text>
                <Text variant="premium">
                  Sophisticated, high-end feel perfect for luxury brands,
                  editorial content, or premium product descriptions.
                </Text>
              </div>

              <div className="space-y-2">
                <Text variant="prose" as="h3" className="text-lg font-medium">
                  Body Text (prose)
                </Text>
                <Text variant="prose">
                  Optimal readability for paragraphs, articles, and most
                  content. This combination ensures comfortable reading without
                  fatigue.
                </Text>
              </div>

              <div className="space-y-2">
                <Text variant="quote" as="h3" className="text-lg font-medium">
                  Quotes & Emphasis (quote)
                </Text>
                <Text
                  variant="quote"
                  className="text-lg italic border-l-4 border-muted pl-4"
                >
                  &ldquo;Perfect for testimonials, quotes, or any text you want
                  to stand out with elegance and breathing room.&rdquo;
                </Text>
              </div>

              <div className="space-y-2">
                <Text variant="default" as="h3" className="text-lg font-medium">
                  UI Elements (default)
                </Text>
                <Text
                  variant="default"
                  as="span"
                  className="inline-block bg-muted px-2 py-1 rounded-lg text-sm"
                >
                  UI Elements
                </Text>
                <Text variant="default" className="text-sm">
                  Great for buttons, navigation, cards, and interface elements
                  where you need clean, readable text.
                </Text>
              </div>

              <div className="space-y-2">
                <Text variant="compact" as="h3" className="text-lg font-medium">
                  Compact Labels (compact)
                </Text>
                <Text
                  variant="compact"
                  as="span"
                  className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm"
                >
                  Compact Label
                </Text>
                <Text variant="compact" className="text-sm">
                  Perfect for badges, tags, small labels, or anywhere you need
                  maximum information density.
                </Text>
              </div>

              {/* Alignment Examples */}
              <div className="space-y-4 border-t pt-4">
                <Text variant="prose" as="h4" className="font-medium">
                  Alignment Options:
                </Text>
                <Text variant="prose" align="left">
                  Left aligned text (default)
                </Text>
                <Text variant="prose" align="center">
                  Center aligned text
                </Text>
                <Text variant="prose" align="right">
                  Right aligned text
                </Text>
              </div>
            </div>
          }
          code={`import { Text } from '@/registry/ra3-ui/typography'

export function Example() {
  return (
    <div className="space-y-6">
      {/* Typography presets */}
      <Text variant="headline" as="h2">Hero Headlines</Text>
      <Text variant="premium">Premium Content</Text>
      <Text variant="prose">Body Text</Text>
             <Text variant="quote">&ldquo;Quotes &amp; Emphasis&rdquo;</Text>
      <Text variant="default">UI Elements</Text>
      <Text variant="compact">Compact Labels</Text>
      
      {/* With alignment */}
      <Text variant="prose" align="center">Center aligned</Text>
      <Text variant="prose" align="right">Right aligned</Text>
      
      {/* Different HTML elements */}
      <Text as="h1" variant="headline">Heading</Text>
      <Text as="span" variant="compact">Inline text</Text>
             <Text as="div" variant="quote">Quote block</Text>
    </div>
  )
}`}
        />

        {/* Installation */}
        <InstallScript componentName={componentName} />
      </FlexColSpacing>
    </PageContainer>
  )
}

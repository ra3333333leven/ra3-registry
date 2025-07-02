import { TitleDesc } from '@/components/(shared)/title-desc'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getComponentGroups } from '@/lib/utils'
import { Card } from '@/registry/ra3-ui/card'
import { FlexColSpacing, PageContainer } from '@/registry/ra3-ui/container'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  // Get component groups from registry
  const componentGroups = getComponentGroups()

  const renderComponentGrid = (
    components: typeof componentGroups.components
  ) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <Link
          key={component.name || 'unnamed'}
          href={`/${component.name || ''}`}
        >
          <Card
            withGradient
            withShadow
            withHoverAnimation
            className="group h-full"
          >
            <CardHeader>
              <CardTitle className="text-xl capitalize">
                {component.name?.replace('-', ' ') || 'Unnamed Component'}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {component.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-end justify-end">
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )

  return (
    <PageContainer>
      <FlexColSpacing>
        <TitleDesc
          title="ra3 Component Registry"
          description="A collection of production ready UI components and hooks"
        />

        {/* Components Section */}
        <div id="components" className="space-y-8">
          <TitleDesc description="Components" />
          {renderComponentGrid(componentGroups.components)}
        </div>

        {/* Theme Components Section */}
        <div id="theme-components" className="space-y-8">
          <TitleDesc description="Theme Components" />
          {renderComponentGrid(componentGroups.themeComponents)}
        </div>

        {/* Hooks Section */}
        <div id="hooks" className="space-y-8">
          <TitleDesc description="Hooks" />
          {renderComponentGrid(componentGroups.hooks)}
        </div>
      </FlexColSpacing>
    </PageContainer>
  )
}

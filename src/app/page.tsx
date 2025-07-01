import { TitleDesc } from '@/components/(shared)/title-desc'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { registry } from '@/registry'
import Link from 'next/link'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Card } from '@/registry/ra3-ui/card'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  // Group components according to sidebar structure
  const componentGroups = {
    components: registry.filter((component) =>
      [
        'button',
        'container',
        'copy-clip',
        'loading',
        'navbar',
        'placeholder',
      ].includes(component.name || '')
    ),
    themeComponents: registry.filter((component) =>
      [
        'theme-provider',
        'theme-dropdown',
        'theme-toggle',
        'theme-set',
      ].includes(component.name || '')
    ),
    hooks: registry.filter((component) => component.type === 'registry:hook'),
  }

  const renderComponentGrid = (components: typeof registry) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <Link
          key={component.name || 'unnamed'}
          href={`/${component.name || ''}`}
          className="group transition-transform hover:scale-105"
        >
          <Card
            withGradient
            withShadow
            className="h-full hover:shadow-lg transition-shadow"
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
          description="A collection of reusable UI components and hooks"
        />

        {/* Components Section */}
        <div className="space-y-8">
          <TitleDesc description="Components" />
          {renderComponentGrid(componentGroups.components)}
        </div>

        {/* Theme Components Section */}
        <div className="space-y-8">
          <TitleDesc description="Theme Components" />
          {renderComponentGrid(componentGroups.themeComponents)}
        </div>

        {/* Hooks Section */}
        <div className="space-y-8">
          <TitleDesc description="Hooks" />
          {renderComponentGrid(componentGroups.hooks)}
        </div>
      </FlexColSpacing>
    </PageContainer>
  )
}

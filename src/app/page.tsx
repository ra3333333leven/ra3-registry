import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  formatComponentName,
  generateNavigation,
  getComponentGroups,
  getInstallScript,
} from '@/lib/utils'
import { Card } from '@/registry/ra3-ui/card'
import { FlexColSpacing, PageContainer } from '@/registry/ra3-ui/container'
import { CopyClip } from '@/registry/ra3-ui/copy-clip'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  // Get component groups from registry
  const componentGroups = getComponentGroups()

  const renderComponentGrid = (
    components: typeof componentGroups.components
  ) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => {
        if (!component.name) {
          throw new Error('Component must have a name', { cause: component })
        }
        if (!component.description) {
          throw new Error('Component must have a description', {
            cause: component,
          })
        }

        return (
          <div key={component.name} className="relative group">
            <Link href={`/${component.name}`}>
              <Card gradient shadow hoverAnimation className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl capitalize">
                    {formatComponentName(component.name)}
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
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <CopyClip
                      textToCopy={getInstallScript(component.name)}
                      variant="outline"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy Install Script</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <PageContainer>
      <FlexColSpacing>
        <TitleDesc
          title="ra3 Component Registry"
          description="A collection of production ready UI components and hooks"
        />

        {generateNavigation().navMain.map((section) => (
          <div
            key={section.url}
            id={section.url.replace('/#', '')}
            className="space-y-8"
          >
            <TitleDesc description={section.title} />
            {renderComponentGrid(
              section.title === 'Components'
                ? componentGroups.components
                : section.title === 'Theme Components'
                  ? componentGroups.themeComponents
                  : componentGroups.hooks
            )}
          </div>
        ))}
      </FlexColSpacing>
    </PageContainer>
  )
}

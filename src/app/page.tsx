import { TitleDesc } from '@/components/(shared)/title-desc'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { registry } from '@/registry'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function HomePage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        <TitleDesc
          title="ra3 Component Registry"
          description="A collection of reusable UI components and hooks"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registry.map((component) => (
            <Link
              key={component.name || 'unnamed'}
              href={`/${component.name || ''}`}
              className="transition-transform hover:scale-105"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="capitalize">
                    {component.name?.replace('-', ' ') || 'Unnamed Component'}
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className=" text-muted-foreground">
                      <span className="font-medium">Type:</span>{' '}
                      {component.type}
                    </div>
                    {component.dependencies &&
                      component.dependencies.length > 0 && (
                        <div className=" text-muted-foreground">
                          <span className="font-medium">Dependencies:</span>{' '}
                          {component.dependencies.join(', ')}
                        </div>
                      )}
                    <div className=" text-muted-foreground">
                      <span className="font-medium">Files:</span>{' '}
                      {component.files?.length || 0}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </FlexColSpacing>
    </PageContainer>
  )
}

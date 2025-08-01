'use client'

import { ComponentPreview } from '@/components/(shared)/component-preview'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { Card } from '@/registry/ra3-ui/card'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

const codeExample = `'use client'

import { Card } from '@/registry/ra3-ui/card'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Example() {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple card with no special effects</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the basic card content.</p>
        </CardContent>
      </Card>

      {/* Card with Title Prop */}
      <Card title="Title Prop Card">
        <CardContent>
          <p>This card uses the title prop to automatically render a CardHeader.</p>
        </CardContent>
      </Card>

      {/* Card with Title & Description Props */}
      <Card 
        title="Props-based Card" 
        description="This card automatically renders header content using props"
      >
        <CardContent>
          <p>Both title and description are provided via props.</p>
        </CardContent>
      </Card>

      {/* Card with Gradient */}
      <Card gradient>
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>Card with gradient background</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a beautiful gradient background.</p>
        </CardContent>
      </Card>

      {/* Card with Shadow */}
      <Card shadow>
        <CardHeader>
          <CardTitle>Shadow Card</CardTitle>
          <CardDescription>Card with shadow effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a shadow effect for depth.</p>
        </CardContent>
      </Card>

      {/* Card with Hover Animation */}
      <Card hoverAnimation>
        <CardHeader>
          <CardTitle>Hover Animation Card</CardTitle>
          <CardDescription>Card with hover animations</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Hover over this card to see the animation.</p>
        </CardContent>
      </Card>

      {/* Card with Outline */}
      <Card outline>
        <CardHeader>
          <CardTitle>Outline Card</CardTitle>
          <CardDescription>Card with primary border outline</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a primary color border outline.</p>
        </CardContent>
      </Card>

      {/* Card with Laser Border */}
      <Card laser>
        <CardHeader>
          <CardTitle>Laser Border Card</CardTitle>
          <CardDescription>Card with animated laser border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has an animated laser border effect.</p>
        </CardContent>
      </Card>

      {/* Card with Custom Laser Props */}
      <Card 
        laser 
        laserProps={{
          size: 100,
          duration: 7,
          colorFrom: '#ff6b6b',
          colorTo: '#4ecdc4',
          borderWidth: 2
        }}
      >
        <CardHeader>
          <CardTitle>Custom Laser Card</CardTitle>
          <CardDescription>Card with customized laser properties</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has custom laser border colors and animation.</p>
        </CardContent>
      </Card>

      {/* Props with Effects */}
      <Card 
        title="Enhanced Props Card" 
        description="Using title and description props with visual effects"
        gradient
        shadow
        hoverAnimation
      >
        <CardContent>
          <p>This demonstrates props working with visual effects.</p>
        </CardContent>
      </Card>

      {/* Card with All Effects */}
      <Card laser gradient shadow hoverAnimation>
        <CardHeader>
          <CardTitle>All Effects Card</CardTitle>
          <CardDescription>Card with all effects combined</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card combines all available effects.</p>
        </CardContent>
      </Card>
    </div>
  )
}`

function CardPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h4 className="text-base font-medium mb-1">Basic Card</h4>
        <p className="text-base text-muted-foreground mb-3">
          Simple card with no special effects
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with no special effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the basic card content without any enhancements.</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Gradient Background</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with gradient background using primary colors
        </p>
        <Card gradient>
          <CardHeader>
            <CardTitle>Gradient Card</CardTitle>
            <CardDescription>Card with gradient background</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has a beautiful gradient background using primary
              colors.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Shadow Effect</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with shadow effect for depth
        </p>
        <Card shadow>
          <CardHeader>
            <CardTitle>Shadow Card</CardTitle>
            <CardDescription>Card with shadow effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has a shadow effect that adds depth to the design.</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Hover Animation</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with hover animations (scale and enhanced shadow)
        </p>
        <Card hoverAnimation>
          <CardHeader>
            <CardTitle>Hover Animation Card</CardTitle>
            <CardDescription>Card with hover animations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hover over this card to see the scale and shadow animation.</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Outline Border</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with primary color border outline
        </p>
        <Card outline>
          <CardHeader>
            <CardTitle>Outline Card</CardTitle>
            <CardDescription>Card with primary border outline</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has a clean primary color border outline for emphasis.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Laser Border</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with animated laser border effect
        </p>
        <Card laser>
          <CardHeader>
            <CardTitle>Laser Border Card</CardTitle>
            <CardDescription>Card with animated laser border</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card features an animated laser border that travels around
              the edges.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Custom Laser Properties</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with customized laser effects
        </p>
        <Card
          laser
          laserProps={{
            size: 100,
            duration: 7,
            colorFrom: '#ff6b6b',
            colorTo: '#4ecdc4',
            borderWidth: 2,
          }}
        >
          <CardHeader>
            <CardTitle>Custom Laser Card</CardTitle>
            <CardDescription>
              Card with customized laser properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has custom laser border colors (red to teal) and slower
              animation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">All Effects Combined</h4>
        <p className="text-base text-muted-foreground mb-3">
          Card with all effects
        </p>
        <Card laser gradient shadow hoverAnimation>
          <CardHeader>
            <CardTitle>All Effects Card</CardTitle>
            <CardDescription>Card with all effects combined</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card combines all available effects for maximum visual
              impact.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CardPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('card')}
          description={getDescriptionFromRegistry('card')}
        />

        {/* Title & Description Props Demo */}
        <ComponentPreview
          title="Card with Title & Description Props"
          description="Card using title and description props for automatic header rendering"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Title Prop Card">
                <CardContent>
                  <p>
                    This card uses the title prop to automatically render a
                    CardHeader with CardTitle.
                  </p>
                </CardContent>
              </Card>

              <Card
                title="Props-based Card"
                description="This card automatically renders header content using props"
              >
                <CardContent>
                  <p>
                    Both title and description are provided via props, making
                    the card easier to use.
                  </p>
                </CardContent>
              </Card>
            </div>
          }
          code={`import { Card } from '@/registry/ra3-ui/card'
import { CardContent } from '@/components/ui/card'

export default function Example() {
  return (
    <div className="space-y-6">
      {/* Card with Title Prop */}
      <Card title="Title Prop Card">
        <CardContent>
          <p>This card uses the title prop to automatically render a CardHeader with CardTitle.</p>
        </CardContent>
      </Card>

      {/* Card with Title & Description Props */}
      <Card 
        title="Props-based Card" 
        description="This card automatically renders header content using props"
      >
        <CardContent>
          <p>Both title and description are provided via props, making the card easier to use.</p>
        </CardContent>
      </Card>
    </div>
  )
}`}
        />

        {/* All Card Variants Demo */}
        <ComponentPreview
          title="Card Style Variants"
          description="Comprehensive showcase of all card styles and effects"
          preview={<CardPreview />}
          code={codeExample}
        />

        {/* Installation */}
        <InstallScript componentName="card" />
      </FlexColSpacing>
    </PageContainer>
  )
}

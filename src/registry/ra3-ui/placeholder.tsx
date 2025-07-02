import { TitleDesc } from '@/components/(shared)/typography'
import { PageContainer } from './container'

// Replace this with something more dynamic, use lorem ipsum generators etc...
function PlaceholderContentPage() {
  return (
    <PageContainer>
      <TitleDesc
        title="Welcome to Home"
        description="This is a placeholder page to demonstrate the layout and scrolling behavior of the application."
      />

      {/* Generate lots of content to test scrolling */}
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="mt-6 mb-8 p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
          <p className="text-muted-foreground mb-4">
            This is section {i + 1} with some content to demonstrate scrolling
            behavior. The header should remain sticky at the top as you scroll
            through this content.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      ))}

      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">
          🎉 You&apos;ve reached the end! The header should have stayed sticky
          throughout your scroll.
        </p>
      </div>
    </PageContainer>
  )
}

export { PlaceholderContentPage }

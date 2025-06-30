// Replace this with something more dynamic, use lorem ipsum generators etc...
function PlaceholderContentPage() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-4xl py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Welcome to Home</h1>

        {/* Generate lots of content to test scrolling */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="mb-8 p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
            <p className="text-muted-foreground mb-4">
              This is section {i + 1} with some content to demonstrate scrolling
              behavior. The header should remain sticky at the top as you scroll
              through this content.
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}

        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            🎉 You&apos;ve reached the end! The header should have stayed sticky
            throughout your scroll.
          </p>
        </div>
      </div>
    </div>
  )
}

export { PlaceholderContentPage }

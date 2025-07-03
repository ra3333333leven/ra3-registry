import { TitleDesc } from '@/registry/ra3-ui/typography'
import { PageContainer } from './container'
import React from 'react'

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

// Placeholder page for when we don't have a real page
function PlaceholderSkeletonPage({ children }: { children?: React.ReactNode }) {
  // Dummy dashboard component with content
  return (
    <div className="bg-secondary flex h-full w-full flex-1 border-none">
      <div className="relative flex h-full w-full flex-1 flex-col gap-2 border-none border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={'first-array' + i}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={'second-array' + i}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export { PlaceholderContentPage, PlaceholderSkeletonPage }

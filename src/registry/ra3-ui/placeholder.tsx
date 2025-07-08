import { TitleDesc } from './typography'
import { FullPage, PageContainer, YPadding } from './container'
import React from 'react'

interface PlaceholderOverflowContentProps {
  title?: string
  desc?: string
  count?: number
}

// Placeholder page with overflow content using lorem ipsum
function PlaceholderOverflowContent({
  title = 'Placeholder Content',
  desc = 'This is a placeholder page with overflow content to demonstrate scrolling behavior.',
  count = 7,
}: PlaceholderOverflowContentProps) {
  return (
    <PageContainer>
      <TitleDesc title={title} description={desc} />

      {/* Generate lots of lorem ipsum content to test scrolling */}
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="mt-6 mb-8 p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">
            Lorem Ipsum Section {i + 1}
          </h2>
          <p className="text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-muted-foreground mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-muted-foreground">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
      ))}
    </PageContainer>
  )
}

interface PlaceholderSkeletonPageProps {
  title?: string
  desc?: string
}

// Placeholder skeleton page for loading states
function PlaceholderSkeletonPage({
  title,
  desc,
}: PlaceholderSkeletonPageProps) {
  return (
    <FullPage className="bg-secondary flex h-full w-full flex-1 border-none">
      <YPadding className="md:py-52 flex h-full w-full flex-col gap-2 border-none border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        {/* Render title and description only if provided */}
        {(title || desc) && (
          <div className="mb-8 text-center">
            <TitleDesc
              title={title || 'Loading...'}
              description={desc || 'Please wait while we load the content.'}
            />
          </div>
        )}

        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={'first-array' + i}
              className="h-32 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
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
      </YPadding>
    </FullPage>
  )
}

export { PlaceholderOverflowContent, PlaceholderSkeletonPage }

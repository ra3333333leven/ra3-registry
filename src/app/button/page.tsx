'use client'

import { DemoPage } from '@/components/(shared)/demo-page'
import { Button } from '@/registry/ra3-ui/button'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { useState } from 'react'

const codeExample = `'use client'

import { Button } from '@/registry/ra3-ui/button'
import { useState } from 'react'

export default function Example() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Loading States */}
      <div className="flex gap-2">
        <Button isLoading={isLoading} onClick={handleClick}>
          Click to Load
        </Button>
        <Button isLoading={isLoading} loadingText="Processing..." onClick={handleClick}>
          With Loading Text
        </Button>
      </div>
      
      {/* With Arrow Animation */}
      <div className="flex gap-2">
        <Button withArrow>Hover me</Button>
        <Button withArrow isLoading={isLoading} onClick={handleClick}>
          Arrow with Loading
        </Button>
      </div>
      
      {/* Rounded Styling */}
      <div className="flex gap-2">
        <Button>Default Rounded</Button>
        <Button rounded>Fully Rounded</Button>
      </div>
    </div>
  )
}`

function ButtonPreview() {
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)
  const [isLoading3, setIsLoading3] = useState(false)
  const [isLoading4, setIsLoading4] = useState(false)

  const handleClick = (
    setLoading: (loading: boolean) => void,
    currentLoading: boolean
  ) => {
    if (!currentLoading) {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-base font-medium mb-1">With Loading States</h4>
        <p className="text-base text-muted-foreground mb-3">
          Click the buttons to see loading states in action
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            isLoading={isLoading1}
            onClick={() => handleClick(setIsLoading1, isLoading1)}
          >
            Click to Load
          </Button>
          <Button
            isLoading={isLoading2}
            loadingText="Loading..."
            onClick={() => handleClick(setIsLoading2, isLoading2)}
          >
            With Loading Text
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">With Animated Arrow</h4>
        <p className="text-base text-muted-foreground mb-3">
          Hover to see arrow animation, click to see loading transformation
        </p>
        <div className="flex flex-wrap gap-2">
          <Button withArrow>Hover me</Button>
          <Button
            withArrow
            isLoading={isLoading3}
            onClick={() => handleClick(setIsLoading3, isLoading3)}
          >
            Click to Load
          </Button>
          <Button
            withArrow
            isLoading={isLoading4}
            loadingText="Loading..."
            onClick={() => handleClick(setIsLoading4, isLoading4)}
          >
            With Loading Text
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">With Rounded Styling</h4>
        <p className="text-base text-muted-foreground mb-3">
          Compare default rounded-2xl styling with fully rounded buttons
        </p>
        <div className="flex flex-wrap gap-2">
          <Button>Default Rounded</Button>
          <Button rounded>Fully Rounded</Button>
        </div>
      </div>
    </div>
  )
}

export default function ButtonPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('button')}
      componentDescription={getDescriptionFromRegistry('button')}
      previewContent={<ButtonPreview />}
      codeExample={codeExample}
      installScriptComponentName="button"
    />
  )
}

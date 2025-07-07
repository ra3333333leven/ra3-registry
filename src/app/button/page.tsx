'use client'

import { DemoPage } from '@/components/(shared)/demo-page'
import { Button } from '@/registry/ra3-ui/button'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { useState } from 'react'

const codeExample = `'use client'

import { Button } from '@/registry/ra3-ui/button'
import { useState } from 'react'

export default function Example() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Loading States */}
      <div className="flex gap-2">
        <Button loading={loading} onClick={handleClick}>
          Click to Load
        </Button>
        <Button loading={loading} loadingText="Processing..." onClick={handleClick}>
          With Loading Text
        </Button>
      </div>
      
      {/* With Arrow Animation */}
      <div className="flex gap-2">
        <Button withArrow>Hover me</Button>
        <Button withArrow loading={loading} onClick={handleClick}>
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
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const [loading4, setLoading4] = useState(false)

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
            loading={loading1}
            onClick={() => handleClick(setLoading1, loading1)}
          >
            Click to Load
          </Button>
          <Button
            loading={loading2}
            loadingText="Loading..."
            onClick={() => handleClick(setLoading2, loading2)}
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
            loading={loading3}
            onClick={() => handleClick(setLoading3, loading3)}
          >
            Click to Load
          </Button>
          <Button
            withArrow
            loading={loading4}
            loadingText="Loading..."
            onClick={() => handleClick(setLoading4, loading4)}
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

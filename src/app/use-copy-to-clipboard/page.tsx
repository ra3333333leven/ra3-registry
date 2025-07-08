import { CodeExample } from '@/components/(shared)/code-example'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

export default function UseCopyToClipboardPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('use-copy-to-clipboard')}
          description={getDescriptionFromRegistry('use-copy-to-clipboard')}
        />

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="Simple copy-to-clipboard with toast notification"
          code={`'use client'

import { useCopyToClipboard } from '@/registry/hooks/use-copy-to-clipboard'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

export default function Example() {
  const { isCopied, handleCopy } = useCopyToClipboard({
    textToCopy: 'Hello, World!',
    copyToastMessage: 'Text copied to clipboard!'
  })

  return (
    <Button onClick={handleCopy} className="gap-2">
      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {isCopied ? 'Copied!' : 'Copy Text'}
    </Button>
  )
}`}
          language="tsx"
        />

        {/* Silent Copy */}
        <CodeExample
          title="Silent Copy"
          description="Copy without showing toast notifications"
          code={`'use client'

import { useCopyToClipboard } from '@/registry/hooks/use-copy-to-clipboard'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

export default function Example() {
  const { isCopied, handleCopy } = useCopyToClipboard({
    textToCopy: 'Silent copy operation'
    // No copyToastMessage = no toast
  })

  return (
    <Button onClick={handleCopy} variant="outline" className="gap-2">
      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {isCopied ? 'Copied!' : 'Silent Copy'}
    </Button>
  )
}`}
          language="tsx"
        />

        {/* Dynamic Text */}
        <CodeExample
          title="Dynamic Text Copy"
          description="Copy user input or dynamic content"
          code={`'use client'

import { useCopyToClipboard } from '@/registry/hooks/use-copy-to-clipboard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function Example() {
  const [text, setText] = useState('Hello, World!')
  
  const { isCopied, handleCopy } = useCopyToClipboard({
    textToCopy: text,
    copyToastMessage: 'Custom text copied!'
  })

  return (
    <div className="space-y-2">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to copy"
      />
      <Button onClick={handleCopy} className="gap-2">
        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {isCopied ? 'Copied!' : 'Copy Text'}
      </Button>
    </div>
  )
}`}
          language="tsx"
        />

        {/* Hook Interface */}
        <CodeExample
          title="Hook Interface"
          description="TypeScript interface and return values"
          code={`// Hook Props
type UseCopyToClipboardProps = {
  textToCopy: string           // Text to copy to clipboard
  copyToastMessage?: string    // Optional toast message on success
}

// Hook Return Value
const { isCopied, handleCopy } = useCopyToClipboard(props)

// isCopied: boolean - true for 2 seconds after successful copy
// handleCopy: () => void - function to trigger copy operation`}
          language="tsx"
        />

        {/* Installation */}
        <InstallScript componentName="use-copy-to-clipboard" />
      </FlexColSpacing>
    </PageContainer>
  )
}

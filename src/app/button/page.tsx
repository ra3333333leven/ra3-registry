import { ComponentPreview } from '@/components/(shared)/component-preview'
import { Button } from '@/components/ui/button'

export default function ButtonPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-24">
      <ComponentPreview
        language="tsx"
        code={`import { Button } from "@/components/ui/button"

<Button variant="default">
  Click me
</Button>`}
        preview={<Button variant="default">Click me</Button>}
      />
    </div>
  )
}

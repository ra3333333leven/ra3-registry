'use client'

import { cn } from '@/lib/utils'
import { Code } from './code'
import { HeaderDesc } from './typography'

interface CodeExampleProps {
  code: string
  language?: string
  copy?: boolean
  className?: string
  title?: string
  description?: string
}

export function CodeExample({
  code,
  language,
  copy,
  className,
  title,
  description,
}: CodeExampleProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {(title || description) && (
        <HeaderDesc title={title} description={description} />
      )}
      <Code code={code} language={language} copy={copy} />
    </div>
  )
}

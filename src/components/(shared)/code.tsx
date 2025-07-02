'use client'

import { cn } from '@/lib/utils'
import { CopyClip } from '@/registry/ra3-ui/copy-clip'
import { useTheme } from 'next-themes'
import { Highlight, themes } from 'prism-react-renderer'

interface CodeProps {
  code: string
  language?: string
  copy?: boolean
  className?: string
}

export function Code({
  code,
  language = 'tsx',
  copy = true,
  className,
}: CodeProps) {
  const { resolvedTheme } = useTheme()

  return (
    <div
      className={cn('w-full rounded-md overflow-hidden relative', className)}
    >
      {copy && (
        <div className="absolute top-4 right-4 z-10">
          <CopyClip variant="outline" textToCopy={code.trim()} />
        </div>
      )}
      <Highlight
        theme={resolvedTheme === 'dark' ? themes.oneDark : themes.github}
        code={code.trim()}
        language={language}
      >
        {({
          className: prismClassName,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={cn(
              'w-full max-h-[700px] overflow-x-auto rounded-lg border py-4 px-4',
              prismClassName
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

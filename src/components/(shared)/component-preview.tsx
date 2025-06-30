'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { CopyClip } from '@/registry/ui/copy-clip'
import { useTheme } from 'next-themes'
import { Highlight, themes } from 'prism-react-renderer'
import * as React from 'react'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  preview: React.ReactNode
  code: string // Raw code string to display
  language?: string // Programming language for syntax highlighting
  align?: 'center' | 'start' | 'end'
}

export function ComponentPreview({
  preview,
  code,
  language = 'tsx',
  className,
  align = 'center',
  ...props
}: ComponentPreviewProps) {
  const { resolvedTheme } = useTheme()

  const tabs = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' },
  ]

  return (
    <div
      className={cn('relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-base relative h-9 rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-md">
          <div
            className={cn(
              'preview flex min-h-[350px] w-full items-center justify-center p-10',
              align === 'start' && 'justify-start',
              align === 'end' && 'justify-end',
              'rounded-md border',
              'bg-gradient-to-br from-background via-muted/40 to-muted/60'
            )}
          >
            {preview}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md overflow-hidden relative">
              <div className="absolute top-4 right-4 z-10">
                <CopyClip variant="outline" textToCopy={code.trim()} />
              </div>
              <Highlight
                theme={
                  resolvedTheme === 'dark' ? themes.oneDark : themes.github
                }
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
                      'w-full max-h-[650px] overflow-x-auto rounded-lg border py-4 px-4',
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

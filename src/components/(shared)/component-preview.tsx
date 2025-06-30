import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
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
  return (
    <div
      className={cn('relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-md">
          <div
            className={cn(
              'preview flex min-h-[350px] w-full items-center justify-center p-10',
              align === 'start' && 'justify-start',
              align === 'end' && 'justify-end',
              'rounded-md border'
            )}
          >
            {preview}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md overflow-hidden">
              <Highlight
                theme={themes.github}
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
                      'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border py-4 px-4 text-sm',
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

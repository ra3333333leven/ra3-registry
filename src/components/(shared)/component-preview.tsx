'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import * as React from 'react'
import { HeaderDesc } from '@/registry/ra3-ui/typography'
import { Code } from './code'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  preview: React.ReactNode
  code: string // Raw code string to display
  language?: string // Programming language for syntax highlighting
  align?: 'center' | 'start' | 'end'
  title?: string // Optional title for the component preview
  description?: string // Optional description for the component preview
  previewClassName?: string // Optional className for the preview container
}

export function ComponentPreview({
  preview,
  code,
  language = 'tsx',
  className,
  align = 'center',
  title,
  description,
  previewClassName,
  ...props
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = React.useState('preview')

  const tabs = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' },
  ]

  return (
    <div
      className={cn('relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      {(title || description) && (
        <HeaderDesc header={title} description={description} />
      )}
      <Tabs
        defaultValue="preview"
        className="relative mr-auto w-full"
        onValueChange={setActiveTab}
      >
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-base relative h-9 rounded-none border-0 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-colors duration-200 data-[state=active]:border-b-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent"
              >
                {tab.label}
                {activeTab === tab.value && (
                  <motion.div
                    className="absolute inset-x-0 bottom-[1px] mx-auto h-0.5 bg-primary"
                    layoutId="activeTabIndicator"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-md">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'preview flex min-h-[350px] w-full items-center justify-center p-10',
              align === 'start' && 'justify-start',
              align === 'end' && 'justify-end',
              'rounded-md border',
              'bg-gradient-to-br from-background via-muted/40 to-muted/60',
              previewClassName
            )}
          >
            {preview}
          </motion.div>
        </TabsContent>

        <TabsContent value="code">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <Code code={code} language={language} />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

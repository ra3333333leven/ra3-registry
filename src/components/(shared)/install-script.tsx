'use client'

import { ScriptCopyBtn } from '@/components/magicui/script-copy-btn'
import { cn } from '@/lib/utils'

interface InstallScriptProps {
  componentName: string
  className?: string
  withHeader?: boolean
}

export function InstallScript({
  componentName,
  className,
  withHeader = true,
}: InstallScriptProps) {
  const registryUrl = `${process.env.NEXT_PUBLIC_URL}/registry/${componentName}.json`

  const commandMap = {
    npm: `npx shadcn@latest add ${registryUrl}`,
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
  }

  const scriptComponent = (
    <ScriptCopyBtn
      showMultiplePackageOptions={true}
      codeLanguage="shell"
      lightTheme="github-light"
      darkTheme="github-dark"
      commandMap={commandMap}
      className={cn('max-w-full', className)}
    />
  )

  if (withHeader) {
    return (
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Installation</h2>
        {scriptComponent}
      </div>
    )
  }

  return scriptComponent
}

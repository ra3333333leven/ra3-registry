'use client'

import { ScriptCopyBtn } from '@/components/magicui/script-copy-btn'
import { cn } from '@/lib/utils'
import { HeaderDesc } from '@/registry/ra3-ui/typography'

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
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
    npm: `npx shadcn@latest add ${registryUrl}`,
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
        <HeaderDesc header="Installation" />
        {scriptComponent}
      </div>
    )
  }

  return scriptComponent
}

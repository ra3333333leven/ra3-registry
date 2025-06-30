'use client'

import { ScriptCopyBtn } from '@/components/magicui/script-copy-btn'
import { cn } from '@/lib/utils'

interface InstallScriptProps {
  componentName: string
  className?: string
}

export function InstallScript({
  componentName,
  className,
}: InstallScriptProps) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'
  const registryUrl = `${baseUrl}/registry/${componentName}.json`

  const commandMap = {
    npm: `npx shadcn@latest add ${registryUrl}`,
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
  }

  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={true}
      codeLanguage="shell"
      lightTheme="github-light"
      darkTheme="github-dark"
      commandMap={commandMap}
      className={cn('max-w-full', className)}
    />
  )
}

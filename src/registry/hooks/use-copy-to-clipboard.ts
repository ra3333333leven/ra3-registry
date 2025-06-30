import { useCallback, useRef, useState } from 'react'
import { toast } from 'sonner'

export type UseCopyToClipboardProps = {
  textToCopy: string
  copyToastMessage?: string
}

export function useCopyToClipboard({
  textToCopy,
  copyToastMessage,
}: UseCopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        if (copyToastMessage) {
          toast.success(copyToastMessage)
        }
        setIsCopied(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      })
      .catch(() => {
        if (copyToastMessage) {
          toast.error('Failed to copy to clipboard.')
        }
      })
  }, [textToCopy, copyToastMessage])

  return { isCopied, handleCopy }
}

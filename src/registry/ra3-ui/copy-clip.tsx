'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { UseCopyToClipboardProps } from '../hooks/use-copy-to-clipboard'
import { useCopyToClipboard } from '../hooks/use-copy-to-clipboard'
import { cva } from 'class-variance-authority'
import { Check, Copy } from 'lucide-react'

const iconSizeVariants = cva('transition-transform ease-in-out', {
  variants: {
    size: {
      sm: 'h-2 w-2',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

/**
 * Props for the CopyClip component
 * @interface CopyClipProps
 * @property {string} textToCopy - The text content to be copied to clipboard
 * @property {string} [copyToastMessage] - Optional custom message to show in toast when content is copied
 * @property {string} [className] - Optional additional CSS classes
 * @property {React.ReactNode} [children] - Optional child elements to render
 * @property {('ghost'|'default'|'destructive'|'outline'|'secondary'|'link')} [variant='ghost'] - Button variant style
 * @property {('sm'|'md'|'lg')} [size='md'] - Button size
 */
type CopyClipProps = UseCopyToClipboardProps & {
  className?: string
  children?: React.ReactNode
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'link'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * A reusable component that provides copy-to-clipboard functionality with visual feedback.
 * Can be rendered either as a standalone button or wrapped around custom content.
 *
 * @component
 * @param {CopyClipProps} props - Component props
 * @returns {JSX.Element} The rendered component
 *
 * @example
 * // As a standalone button
 * <CopyClip textToCopy="Text to copy" />
 *
 * @example
 * // With custom content
 * <CopyClip textToCopy="Text to copy">
 *   <span>Click to copy</span>
 * </CopyClip>
 */
export function CopyClip({
  textToCopy,
  copyToastMessage,
  className,
  children,
  variant = 'ghost',
  size = 'md',
}: CopyClipProps) {
  const { isCopied, handleCopy } = useCopyToClipboard({
    textToCopy,
    copyToastMessage,
  })

  if (children) {
    return (
      <div
        className={cn(
          'hover:text-primary-foreground group relative cursor-pointer',
          className
        )}
        onClick={handleCopy}
      >
        {children}
        <div className="absolute -right-1 -bottom-1 flex items-center justify-center">
          <div className="relative">
            <Check
              className={cn(
                'absolute',
                iconSizeVariants({ size }),
                isCopied ? 'scale-100' : 'scale-0'
              )}
            />
            <Copy
              className={cn(
                'opacity-0 group-hover:opacity-100',
                iconSizeVariants({ size }),
                isCopied ? 'scale-0' : 'scale-100'
              )}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn('hover:bg-muted relative', className)}
      aria-label="Copy to clipboard"
      onClick={handleCopy}
    >
      <div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Check className={cn(isCopied ? 'scale-100' : 'scale-0')} />
        </div>
        <Copy className={cn(isCopied ? 'scale-0' : 'scale-100')} />
      </div>
    </Button>
  )
}

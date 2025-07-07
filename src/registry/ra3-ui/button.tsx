'use client'

import { Button as ShadcnButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Spinner } from './loading'
import { MoveRight } from 'lucide-react'
import { useState } from 'react'

// Conditional types to ensure loadingText can only be used when loading is provided
type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  withArrow?: boolean
  rounded?: boolean
} & (
    | {
        loading: boolean
        loadingText?: string
      }
    | {
        loading?: never
        loadingText?: never
      }
  )

/**
 * A button component that extends ShadcnButton with loading state functionality.
 * @param loading - Boolean to control spinner visibility and button disabled state
 * @param loadingText - Optional text to show alongside spinner when loading
 * @param withArrow - Boolean to show an animated arrow that transforms into spinner when loading
 * @param rounded - Boolean to apply rounded-full styling
 */
function Button({
  className,
  children,
  loading,
  loadingText,
  disabled,
  withArrow,
  rounded,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true)
    onMouseEnter?.(e)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false)
    onMouseLeave?.(e)
  }

  return (
    <ShadcnButton
      className={cn('rounded-2xl', rounded && 'rounded-full', className)}
      disabled={loading || disabled}
      onMouseEnter={withArrow ? handleMouseEnter : onMouseEnter}
      onMouseLeave={withArrow ? handleMouseLeave : onMouseLeave}
      {...props}
    >
      {loading && !withArrow && <Spinner size="sm" />}
      {loading && loadingText ? loadingText : children}
      {withArrow && (
        <>
          {loading ? (
            <Spinner size="sm" />
          ) : (
            <MoveRight
              className={cn(
                'ml-2 h-4 w-4 transition-transform duration-200',
                isHovered ? 'translate-x-1' : ''
              )}
            />
          )}
        </>
      )}
    </ShadcnButton>
  )
}

export { Button }

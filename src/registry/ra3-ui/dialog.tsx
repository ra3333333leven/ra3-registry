'use client'

import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const dialogVariants = cva('', {
  variants: {
    size: {
      sm: 'sm:max-w-sm',
      md: 'sm:max-w-md',
      lg: 'sm:max-w-lg',
      xl: 'sm:max-w-xl',
      '2xl': 'sm:max-w-2xl',
      '3xl': 'sm:max-w-3xl',
      '4xl': 'sm:max-w-4xl',
      '5xl': 'sm:max-w-5xl',
      '6xl': 'sm:max-w-6xl',
      '7xl': 'sm:max-w-7xl',
      full: 'sm:max-w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

interface DialogProps
  extends React.ComponentProps<typeof ShadcnDialog>,
    VariantProps<typeof dialogVariants> {
  /**
   * Dialog title - if provided, renders a DialogTitle
   */
  title?: string
  /**
   * Dialog description - if provided, renders a DialogDescription
   */
  description?: string
  /**
   * Primary action button - can be either a function that executes on click or a React component
   */
  primaryAction?: (() => void) | React.ReactNode
  /**
   * Primary action button text - used when primaryAction is a function, defaults to "Save"
   */
  primaryActionText?: string
  /**
   * Secondary action button - can be either a function that executes on click or a React component
   */
  secondaryAction?: (() => void) | React.ReactNode
  /**
   * Secondary action button text - used when secondaryAction is a function, defaults to "Cancel"
   */
  secondaryActionText?: string
  /**
   * Whether to show the close button in the header
   */
  showCloseButton?: boolean
  /**
   * Trigger element - what the user clicks to open the dialog
   */
  trigger?: React.ReactNode
  /**
   * Additional CSS classes for the content
   */
  className?: string
  /**
   * Whether the dialog should close when clicking outside or pressing escape
   */
  modal?: boolean
}

function Dialog({
  title,
  description,
  primaryAction,
  primaryActionText = 'Save',
  secondaryAction,
  secondaryActionText = 'Cancel',
  showCloseButton = true,
  trigger,
  size,
  className,
  modal = true,
  children,
  ...props
}: DialogProps) {
  const handlePrimaryAction = React.useCallback(() => {
    if (typeof primaryAction === 'function') {
      primaryAction()
    }
  }, [primaryAction])

  const handleSecondaryAction = React.useCallback(() => {
    if (typeof secondaryAction === 'function') {
      secondaryAction()
    }
  }, [secondaryAction])

  return (
    <ShadcnDialog modal={modal} {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(
          dialogVariants({
            size,
          }),
          className
        )}
      >
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
        {(primaryAction || secondaryAction) && (
          <DialogFooter>
            {secondaryAction && (
              <>
                {typeof secondaryAction === 'function' ? (
                  <DialogClose asChild>
                    <Button variant="outline" onClick={handleSecondaryAction}>
                      {secondaryActionText}
                    </Button>
                  </DialogClose>
                ) : (
                  <>{secondaryAction}</>
                )}
              </>
            )}
            {primaryAction && (
              <>
                {typeof primaryAction === 'function' ? (
                  <Button onClick={handlePrimaryAction}>
                    {primaryActionText}
                  </Button>
                ) : (
                  <>{primaryAction}</>
                )}
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </ShadcnDialog>
  )
}

export { Dialog }

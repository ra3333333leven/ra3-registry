'use client'

import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const alertDialogVariants = cva('', {
  variants: {
    variant: {
      default: '',
      destructive:
        'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface AlertDialogProps
  extends React.ComponentProps<typeof ShadcnAlertDialog>,
    VariantProps<typeof alertDialogVariants> {
  /**
   * Alert dialog title - if provided, renders an AlertDialogTitle
   */
  title?: string
  /**
   * Alert dialog description - if provided, renders an AlertDialogDescription
   */
  description?: string
  /**
   * Cancel button text - defaults to "Cancel"
   */
  cancelText?: string
  /**
   * Action button - can be either a function that executes on click or a React component
   */
  action?: (() => void) | React.ReactNode
  /**
   * Action button text - used when action is a function, defaults to "Continue"
   */
  actionText?: string
  /**
   * Whether the action button should have destructive styling
   */
  destructive?: boolean
  /**
   * Trigger element - what the user clicks to open the dialog
   */
  trigger?: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

function AlertDialog({
  title,
  description,
  cancelText = 'Cancel',
  action,
  actionText = 'Continue',
  destructive = false,
  trigger,
  variant,
  className,
  children,
  ...props
}: AlertDialogProps) {
  const handleAction = React.useCallback(() => {
    if (typeof action === 'function') {
      action()
    }
  }, [action])

  return (
    <ShadcnAlertDialog {...props}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent
        className={cn(
          alertDialogVariants({
            variant,
          }),
          className
        )}
      >
        {(title || description) && (
          <AlertDialogHeader>
            {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
            {description && (
              <AlertDialogDescription>{description}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
        )}
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          {typeof action === 'function' ? (
            <AlertDialogAction
              onClick={handleAction}
              className={cn(
                destructive &&
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90'
              )}
            >
              {actionText}
            </AlertDialogAction>
          ) : (
            action && <>{action}</>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { AlertDialog }

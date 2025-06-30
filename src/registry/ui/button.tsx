import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'

// Copied directly from shadcn button props
type ShadcnButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

// Our extended button
function Button({ className, variant, size, ...props }: ShadcnButtonProps) {
  return (
    // Temporary
    <ShadcnButton
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }

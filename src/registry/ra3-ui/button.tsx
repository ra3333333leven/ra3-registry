import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  asChild?: boolean
}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ShadcnButton
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }

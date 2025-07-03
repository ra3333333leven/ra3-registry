import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// Shared variant configurations
const alignVariant = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

// Shared typography variant configuration
const typographyVariantConfig = {
  variants: {
    align: alignVariant,
  },
  defaultVariants: {
    align: 'left',
  },
} as const

// ***CONFIGURABLE***
// Typography variants using shared configuration
const titleVariants = cva(
  'text-5xl font-bold whitespace-pre-wrap',
  typographyVariantConfig
)

const headerVariants = cva(
  'text-3xl font-semibold whitespace-pre-wrap',
  typographyVariantConfig
)

const titleDescriptionVariants = cva(
  'text-xl text-muted-foreground whitespace-pre-wrap',
  typographyVariantConfig
)

const headerDescriptionVariants = cva(
  'text-lg text-muted-foreground whitespace-pre-wrap',
  typographyVariantConfig
)

// Spacing constants
const TITLE_DESC_SPACING_CLASSES = 'space-y-4'
const HEADER_DESC_SPACING_CLASSES = 'space-y-2'
// ***CONFIGURABLE***

// Text component variants
const textVariants = cva('', {
  variants: {
    align: alignVariant,
    variant: {
      headline: 'leading-tight tracking-tight', // Hero Headlines
      premium: 'leading-relaxed tracking-wide', // Premium Content
      prose: 'leading-6 tracking-normal', // Body Text
      quote: 'leading-loose tracking-wider', // Quotes & Emphasis
      compact: 'leading-none tracking-tighter', // Compact Labels
      default: 'leading-snug tracking-normal', // UI Elements
    },
  },
  defaultVariants: {
    align: 'left',
    variant: 'default',
  },
})

interface TypographyBaseProps extends VariantProps<typeof titleVariants> {
  description?: string
  className?: string
  descClassName?: string
}

interface TitleDescProps extends TypographyBaseProps {
  title?: string
  titleClassName?: string
}

function TitleDesc({
  title,
  description,
  className,
  titleClassName,
  descClassName,
  align,
}: TitleDescProps) {
  return (
    <div className={cn(TITLE_DESC_SPACING_CLASSES, className)}>
      {title && (
        <h1 className={cn(titleVariants({ align }), titleClassName)}>
          {title}
        </h1>
      )}
      {description && (
        <p className={cn(titleDescriptionVariants({ align }), descClassName)}>
          {description}
        </p>
      )}
    </div>
  )
}

interface HeaderDescProps extends TypographyBaseProps {
  header?: string
  headerClassName?: string
}

function HeaderDesc({
  header,
  description,
  className,
  headerClassName,
  descClassName,
  align,
}: HeaderDescProps) {
  return (
    <div className={cn(HEADER_DESC_SPACING_CLASSES, className)}>
      {header && (
        <h2 className={cn(headerVariants({ align }), headerClassName)}>
          {header}
        </h2>
      )}
      {description && (
        <p className={cn(headerDescriptionVariants({ align }), descClassName)}>
          {description}
        </p>
      )}
    </div>
  )
}

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * A simple text component with typography presets for different use cases.
 *
 * @example
 * // Using presets
 * <Text variant="headline">Hero Headline</Text>
 * <Text variant="premium">Premium content text</Text>
 * <Text variant="prose">Body paragraph text</Text>
 * <Text variant="quote" as="blockquote">Quoted text</Text>
 * <Text variant="compact">Compact label</Text>
 * <Text variant="default">UI element text</Text>
 *
 * @example
 * // Different elements
 * <Text as="h1" variant="headline">Heading</Text>
 * <Text as="span" variant="compact">Inline text</Text>
 */
function Text({
  children,
  className,
  as: Component = 'p',
  variant,
  align,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, align }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export { TitleDesc, HeaderDesc, Text }

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Text alignment options for typography components
 */
const alignVariant = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

/**
 * Shared typography variant configuration used across all typography components
 * Provides consistent alignment options and default values
 */
const typographyVariantConfig = {
  variants: {
    align: alignVariant,
  },
  defaultVariants: {
    align: 'left',
  },
} as const

// ***CONFIGURABLE***
/**
 * Typography variants using shared configuration
 * These define the base styling for different text elements
 */

/**
 * Title variant - Large, bold text for main page titles
 * Uses text-5xl font-bold with whitespace-pre-wrap for line break support
 */
const titleVariants = cva(
  'text-5xl font-bold whitespace-pre-wrap',
  typographyVariantConfig
)

/**
 * Header variant - Medium-large, semibold text for section headers
 * Uses text-3xl font-semibold with whitespace-pre-wrap for line break support
 */
const headerVariants = cva(
  'text-3xl font-semibold whitespace-pre-wrap',
  typographyVariantConfig
)

/**
 * Title description variant - Medium text for descriptions under main titles
 * Uses text-xl with muted foreground color and whitespace-pre-wrap
 */
const titleDescriptionVariants = cva(
  'text-xl text-muted-foreground whitespace-pre-wrap',
  typographyVariantConfig
)

/**
 * Header description variant - Smaller text for descriptions under section headers
 * Uses text-lg with muted foreground color and whitespace-pre-wrap
 */
const headerDescriptionVariants = cva(
  'text-lg text-muted-foreground whitespace-pre-wrap',
  typographyVariantConfig
)

/**
 * Spacing constants for typography components
 * Controls vertical spacing between title/header and description elements
 */
const TITLE_DESC_SPACING_CLASSES = 'space-y-4'
const HEADER_DESC_SPACING_CLASSES = 'space-y-2'
// ***CONFIGURABLE***

/**
 * Text component variants with typography presets for different use cases
 * Each variant provides specific line-height and letter-spacing combinations
 */
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

/**
 * Base props interface for typography components
 * Extends VariantProps to include alignment options and common styling props
 */
interface TypographyBaseProps extends VariantProps<typeof titleVariants> {
  /** Optional description text to display below the title/header */
  description?: string
  /** Additional CSS classes for the container element */
  className?: string
  /** Additional CSS classes for the description element */
  descClassName?: string
}

/**
 * Props interface for the TitleDesc component
 * Extends TypographyBaseProps to include title-specific props
 */
interface TitleDescProps extends TypographyBaseProps {
  /** The main title text to display */
  title?: string
  /** Additional CSS classes for the title element */
  titleClassName?: string
}

/**
 * TitleDesc component for displaying main page titles with optional descriptions
 *
 * Renders a large, bold title (h1) with optional description text below it.
 * Supports text alignment and custom styling through className props.
 *
 * @example
 * // Basic usage with title and description
 * <TitleDesc
 *   title="Welcome to Our Site"
 *   description="Discover amazing content and features"
 * />
 *
 * @example
 * // With custom alignment and styling
 * <TitleDesc
 *   title="Centered Title"
 *   description="Centered description"
 *   align="center"
 *   className="my-8"
 *   titleClassName="text-primary"
 * />
 *
 * @example
 * // Title only or description only
 * <TitleDesc title="Title Only" />
 * <TitleDesc description="Description Only" />
 */
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

/**
 * Props interface for the HeaderDesc component
 * Extends TypographyBaseProps to include header-specific props
 */
interface HeaderDescProps extends TypographyBaseProps {
  /** The section header text to display */
  header?: string
  /** Additional CSS classes for the header element */
  headerClassName?: string
}

/**
 * HeaderDesc component for displaying section headers with optional descriptions
 *
 * Renders a medium-large, semibold header (h2) with optional description text below it.
 * Uses smaller spacing and text sizes compared to TitleDesc for a more compact appearance.
 *
 * @example
 * // Basic usage with header and description
 * <HeaderDesc
 *   header="Section Title"
 *   description="Section description text"
 * />
 *
 * @example
 * // With custom alignment
 * <HeaderDesc
 *   header="Right Aligned Header"
 *   description="Right aligned description"
 *   align="right"
 * />
 *
 * @example
 * // Header only or description only
 * <HeaderDesc header="Header Only" />
 * <HeaderDesc description="Description Only" />
 */
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

/**
 * Props interface for the Text component
 * Extends VariantProps to include text-specific props and element selection
 */
interface TextProps extends VariantProps<typeof textVariants> {
  /** The content to render inside the text element */
  children: React.ReactNode
  /** Additional CSS classes for the text element */
  className?: string
  /** The HTML element to render (defaults to 'p') */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * A flexible text component with typography presets for different use cases
 *
 * Provides six typography variants optimized for different content types:
 * - headline: Tight spacing for hero headlines and attention-grabbing text
 * - premium: Relaxed spacing for luxury/premium content
 * - prose: Balanced spacing for body text and articles
 * - quote: Loose spacing for quotes and emphasized content
 * - compact: Minimal spacing for labels and dense information
 * - default: Standard spacing for UI elements
 *
 * @example
 * // Using different typography presets
 * <Text variant="headline">Hero Headline</Text>
 * <Text variant="premium">Premium content text</Text>
 * <Text variant="prose">Body paragraph text</Text>
 * <Text variant="quote">&ldquo;Quoted text with emphasis&rdquo;</Text>
 * <Text variant="compact">Compact label</Text>
 * <Text variant="default">UI element text</Text>
 *
 * @example
 * // With different HTML elements
 * <Text as="h1" variant="headline">Main Heading</Text>
 * <Text as="span" variant="compact">Inline text</Text>
 * <Text as="div" variant="quote">Quote block</Text>
 *
 * @example
 * // With alignment and custom styling
 * <Text variant="prose" align="center" className="text-primary">
 *   Centered, styled text
 * </Text>
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

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// Configuration constants for consistent spacing and sizing across the project
const Y_PADDING = 'pt-4 pb-32 md:p-32' // Vertical padding for page sections - adjust per project needs
const WIDTH = 'px-4 md:max-w-5xl mx-auto' // Maximum width constraint for content - adjust per project needs
const FLEX_COL_GAP = 'gap-8' // Gap spacing for flex column layouts - adjust per project needs
const DEBUG_BORDER = 'border-2 border-red-500' // Debug border styling for development

const DEFAULT_DEBUG = false // Default debug state

// Common props interface for all container components
interface ContainerProps {
  children: ReactNode // Content to be rendered inside the container
  className?: string // Optional additional CSS classes for customization
  debug?: boolean // Debug flag to toggle border visibility
}

/**
 * FlexColSpacing - Flexible column layout with consistent spacing
 * Uses flex-col for vertical stacking with full height/width and gap spacing
 * Ideal for main content areas that need consistent vertical spacing between elements
 */
function FlexColSpacing({
  children,
  className,
  debug = DEFAULT_DEBUG,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        FLEX_COL_GAP,
        debug && DEBUG_BORDER,
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * FullPage - Full height and width container
 * Uses h-full w-full for dynamic viewport units that account for mobile browser UI
 * Ideal for full-screen layouts and hero sections
 */
function FullPage({
  children,
  className,
  debug = DEFAULT_DEBUG,
}: ContainerProps) {
  return (
    <div className={cn('overflow-x-hidden', debug && DEBUG_BORDER, className)}>
      {children}
    </div>
  )
}

/**
 * YPadding - Adds vertical padding to content
 * Uses configurable Y_PADDING constant for project-wide consistency
 * Maintains full height while adding top/bottom spacing
 */
function YPadding({
  children,
  className,
  debug = DEFAULT_DEBUG,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'overflow-y-auto',
        Y_PADDING,
        debug && DEBUG_BORDER,
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * FixedWidth - Responsive width container with horizontal constraints
 * Full width with small padding on mobile devices
 * Uses max-width constraint on md and larger screens for optimal reading width
 * Centers content horizontally on larger screens
 */
function FixedWidth({
  children,
  className,
  debug = DEFAULT_DEBUG,
}: ContainerProps) {
  return (
    <div className={cn('', WIDTH, debug && DEBUG_BORDER, className)}>
      {children}
    </div>
  )
}

/**
 * PageContainer - Complete page layout wrapper
 * Combines FullPage, YPadding, and FixedWidth for a standard page structure
 * Provides consistent spacing, responsive behavior, and full viewport coverage
 */
function PageContainer({
  children,
  className,
  debug = DEFAULT_DEBUG,
}: ContainerProps) {
  return (
    <FullPage className={className} debug={debug}>
      <YPadding debug={debug}>
        <FixedWidth debug={debug}>{children}</FixedWidth>
      </YPadding>
    </FullPage>
  )
}

export { FlexColSpacing, FullPage, YPadding, FixedWidth, PageContainer }

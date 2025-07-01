import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Registry } from 'simple-shadcn-cli/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to generate internal dependency URLs
export const toInternalRegistryUrl = (componentName: string) =>
  `${process.env.NEXT_PUBLIC_URL}/registry/${componentName}.json`

// Registry utility functions

/**
 * Groups registry components into categories based on type and name
 */
export function getComponentGroups(registry: Registry) {
  const components = registry.filter(
    (component) =>
      component.type === 'registry:ui' && !component.name?.includes('theme')
  )

  const themeComponents = registry.filter(
    (component) =>
      component.type === 'registry:ui' && component.name?.includes('theme')
  )

  const hooks = registry.filter(
    (component) => component.type === 'registry:hook'
  )

  return {
    components,
    themeComponents,
    hooks,
  }
}

/**
 * Formats component name for display (capitalize and replace hyphens)
 */
export function formatComponentName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Generates navigation data for sidebar from registry
 */
export function generateNavigation(registry: Registry) {
  const groups = getComponentGroups(registry)

  return {
    navMain: [
      {
        title: 'Components',
        url: '/',
        items: groups.components.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
      {
        title: 'Theme Components',
        url: '/',
        items: groups.themeComponents.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
      {
        title: 'Hooks',
        url: '/',
        items: groups.hooks.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
    ],
  }
}

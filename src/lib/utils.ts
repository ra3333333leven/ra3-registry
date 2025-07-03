import { registry } from '@/registry'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Registry utility functions
/**
 * Gets the install script for a specific package manager and component
 */
export function getInstallScript(
  componentName: string,
  pm: 'pnpm' | 'npm' = 'pnpm'
): string {
  const commandMap = getInstallScriptMap(componentName)
  return commandMap[pm]
}

/**
 * Gets the complete install command map for a component
 */
export function getInstallScriptMap(componentName: string) {
  const registryUrl = `${process.env.NEXT_PUBLIC_URL}/registry/${componentName}.json`

  return {
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
    npm: `npx shadcn@latest add ${registryUrl}`,
  }
}

/**
 * Groups registry components into categories based on type and name
 */
export function getComponentGroups() {
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
 * Gets the formatted name for a component from the registry
 * Throws an error if the component is not found
 */
export function getNameFromRegistry(componentName: string): string {
  const component = registry.find((item) => item.name === componentName)
  if (!component) {
    throw new Error(`Component "${componentName}" not found in registry`)
  }
  if (!component.name) {
    throw new Error(`Component "${componentName}" has no name in registry`)
  }
  return formatComponentName(component.name)
}

/**
 * Gets the description for a component from the registry
 * Throws an error if the component is not found
 */
export function getDescriptionFromRegistry(componentName: string): string {
  const component = registry.find((item) => item.name === componentName)
  if (!component) {
    throw new Error(`Component "${componentName}" not found in registry`)
  }
  if (!component.description) {
    throw new Error(
      `Component "${componentName}" has no description in registry`
    )
  }
  return component.description
}

/**
 * Generates navigation data for sidebar from registry
 */
export function generateNavigation() {
  const groups = getComponentGroups()

  return {
    navMain: [
      {
        title: 'Components',
        url: '/#components',
        items: groups.components.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
      {
        title: 'Theme Components',
        url: '/#theme-components',
        items: groups.themeComponents.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
      {
        title: 'Hooks',
        url: '/#hooks',
        items: groups.hooks.map((component) => ({
          title: formatComponentName(component.name || ''),
          url: `/${component.name || ''}`,
        })),
      },
    ],
  }
}

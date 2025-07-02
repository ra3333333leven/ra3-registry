import type { Registry } from 'simple-shadcn-cli/types'
import { toInternalRegistryUrl } from '@/lib/utils'
/**
 * Registry Configuration
 *
 * dependencies: npm package dependencies (e.g., 'framer-motion', 'next-themes')
 * registryDependencies: either shadcn component names (e.g., 'dropdown-menu', 'button')
 *   or internal registry items that require URLs (use toInternalRegistryUrl utility)
 */
export const registry: Registry = [
  {
    name: 'button',
    type: 'registry:ui',
    description:
      'Button with loading states, animated arrow, and rounded styling',
    files: [{ path: 'ra3-ui/button.tsx', type: 'registry:ui' }],
    dependencies: ['lucide-react'],
    registryDependencies: ['button', toInternalRegistryUrl('loading')],
  },
  {
    name: 'card',
    type: 'registry:ui',
    description:
      'Enhanced card component with optional laser border, gradient background, and shadow effects',
    files: [{ path: 'ra3-ui/card.tsx', type: 'registry:ui' }],
    registryDependencies: ['card'],
  },
  {
    name: 'container',
    type: 'registry:ui',
    description: 'Layout components to reuse across your app',
    files: [{ path: 'ra3-ui/container.tsx', type: 'registry:ui' }],
  },
  {
    name: 'copy-clip',
    type: 'registry:ui',
    description:
      'Simple copy-to-clipboard component with visual feedback and optional toasts',
    files: [{ path: 'ra3-ui/copy-clip.tsx', type: 'registry:ui' }],
    dependencies: ['lucide-react'],
    registryDependencies: [
      'button',
      toInternalRegistryUrl('use-copy-to-clipboard'),
    ],
  },
  {
    name: 'loading',
    type: 'registry:ui',
    description:
      'Loading spinner components with sizing options and visibility control',
    files: [{ path: 'ra3-ui/loading.tsx', type: 'registry:ui' }],
    dependencies: ['lucide-react'],
  },
  {
    name: 'navbar',
    type: 'registry:ui',
    description:
      'Responsive navigation bar with smooth animations and optional theme toggle',
    files: [{ path: 'ra3-ui/navbar.tsx', type: 'registry:ui' }],
    dependencies: ['framer-motion'],
    registryDependencies: ['use-mobile', toInternalRegistryUrl('theme-toggle')],
  },
  {
    name: 'placeholder',
    type: 'registry:ui',
    description:
      'Placeholder components for layout demonstrations or WIP pages',
    files: [{ path: 'ra3-ui/placeholder.tsx', type: 'registry:ui' }],
    registryDependencies: [toInternalRegistryUrl('container')],
  },
  {
    name: 'theme-provider',
    type: 'registry:ui',
    description: 'Theme provider that wraps your app',
    files: [{ path: 'ra3-ui/theme-provider.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes'],
  },
  {
    name: 'theme-dropdown',
    type: 'registry:ui',
    description: 'Theme dropdown menu selection for light/dark/system',
    files: [{ path: 'ra3-ui/theme-dropdown.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
  {
    name: 'theme-toggle',
    type: 'registry:ui',
    description: 'Simple light/dark theme toggle button',
    files: [{ path: 'ra3-ui/theme-toggle.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
  },
  {
    name: 'theme-set',
    type: 'registry:ui',
    description:
      'Packages: theme-provider, theme-dropdown, theme-toggle into one install',
    files: [
      { path: 'ra3-ui/theme-provider.tsx', type: 'registry:ui' },
      { path: 'ra3-ui/theme-dropdown.tsx', type: 'registry:ui' },
      { path: 'ra3-ui/theme-toggle.tsx', type: 'registry:ui' },
    ],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
  {
    name: 'use-copy-to-clipboard',
    type: 'registry:hook',
    description: 'Custom hook for copying text with optional toasts',
    files: [{ path: 'hooks/use-copy-to-clipboard.ts', type: 'registry:hook' }],
    dependencies: ['sonner'],
  },
]

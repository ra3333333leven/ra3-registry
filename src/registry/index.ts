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
    name: 'navbar',
    type: 'registry:ui',
    description:
      'A responsive navigation bar with smooth animations and theme toggle support',
    files: [{ path: 'ra3-ui/navbar.tsx', type: 'registry:ui' }],
    dependencies: ['framer-motion'],
    registryDependencies: ['use-mobile', toInternalRegistryUrl('theme-set')],
  },
  {
    name: 'theme-provider',
    type: 'registry:ui',
    description:
      'A theme provider component wrapping next-themes ThemeProvider',
    files: [{ path: 'ra3-ui/theme-provider.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes'],
  },
  {
    name: 'theme-dropdown',
    type: 'registry:ui',
    description:
      'A dropdown menu for theme selection with light, dark, and system options',
    files: [{ path: 'ra3-ui/theme-dropdown.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
  {
    name: 'theme-toggle',
    type: 'registry:ui',
    description:
      'A simple toggle button for switching between light and dark themes',
    files: [{ path: 'ra3-ui/theme-toggle.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
  },
  {
    name: 'theme-set',
    type: 'registry:ui',
    description:
      'A collection of theme-related components including ThemeProvider, ThemeDropdown, and ThemeToggle',
    files: [
      { path: 'ra3-ui/theme-provider.tsx', type: 'registry:ui' },
      { path: 'ra3-ui/theme-dropdown.tsx', type: 'registry:ui' },
      { path: 'ra3-ui/theme-toggle.tsx', type: 'registry:ui' },
    ],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
]

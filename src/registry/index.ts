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
      'An extended button component based on shadcn/ui button with additional customization',
    files: [{ path: 'ra3-ui/button.tsx', type: 'registry:ui' }],
    registryDependencies: ['button'],
  },
  {
    name: 'container',
    type: 'registry:ui',
    description:
      'A collection of responsive container components for consistent page layouts and spacing',
    files: [{ path: 'ra3-ui/container.tsx', type: 'registry:ui' }],
  },
  {
    name: 'copy-clip',
    type: 'registry:ui',
    description:
      'A reusable component that provides copy-to-clipboard functionality with visual feedback',
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
      'Loading spinner components with various sizes and a full-page loading component',
    files: [{ path: 'ra3-ui/loading.tsx', type: 'registry:ui' }],
    dependencies: ['lucide-react'],
  },
  {
    name: 'navbar',
    type: 'registry:ui',
    description:
      'A responsive navigation bar with smooth animations and theme toggle support',
    files: [{ path: 'ra3-ui/navbar.tsx', type: 'registry:ui' }],
    dependencies: ['framer-motion'],
    registryDependencies: ['use-mobile', toInternalRegistryUrl('theme-toggle')],
  },
  {
    name: 'placeholder',
    type: 'registry:ui',
    description:
      'A placeholder page component with sample content for demonstrating layouts',
    files: [{ path: 'ra3-ui/placeholder.tsx', type: 'registry:ui' }],
    registryDependencies: [toInternalRegistryUrl('container')],
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
  {
    name: 'use-copy-to-clipboard',
    type: 'registry:hook',
    description:
      'A custom hook for copying text to clipboard with toast notifications',
    files: [{ path: 'hooks/use-copy-to-clipboard.ts', type: 'registry:hook' }],
    dependencies: ['sonner'],
  },
]

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
    name: 'theme-set',
    type: 'registry:ui',
    description:
      'A collection of theme-related components including ThemeProvider, ThemeDropdown, and ThemeToggle',
    files: [{ path: 'ra3-ui/theme-set.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
]

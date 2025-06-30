import type { Registry } from 'simple-shadcn-cli/types'

export const registry: Registry = [
  {
    name: 'navbar',
    type: 'registry:ui',
    description:
      'A responsive navigation bar with smooth animations and theme toggle support',
    files: [{ path: 'ui/navbar.tsx', type: 'registry:ui' }],
    dependencies: ['framer-motion'],
    // registryDependencies: ['use-is-mobile', 'theme-set'],
  },
  {
    name: 'use-is-mobile',
    type: 'registry:hook',
    description: 'A hook to detect if the user is on a mobile device',
    files: [{ path: 'hooks/use-is-mobile.ts', type: 'registry:hook' }],
  },
  {
    name: 'theme-set',
    type: 'registry:ui',
    description:
      'A collection of theme-related components including ThemeProvider, ThemeDropdown, and ThemeToggle',
    files: [{ path: 'ui/theme-set.tsx', type: 'registry:ui' }],
    dependencies: ['next-themes', 'lucide-react'],
    registryDependencies: ['dropdown-menu', 'button'],
  },
]

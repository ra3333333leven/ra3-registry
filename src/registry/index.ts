import type { Registry } from 'simple-shadcn-cli/types'

export const registry: Registry = [
  {
    name: 'my-button',
    type: 'registry:ui',
    description: 'Custom button',
    files: [{ path: 'ui/my-button.tsx', type: 'registry:ui' }],
  },
]

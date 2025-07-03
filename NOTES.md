# Development Notes

## Adding Components

1. Create component in `src/registry/ra3-ui/`, `src/registry/lib/`, `src/registry/hooks/`, etc.
2. Register component in `src/registry/index.ts`:

```ts
export const registry: Registry = [
  {
    name: "my-button",
    type: "registry:ui", 
    description: "Custom button component",
    files: [{ path: "ra3-ui/my-button.tsx", type: "registry:ui" }],
    dependencies: ["framer-motion"], // npm dependencies
    registryDependencies: ["button"] // shadcn components
  }
]
```

3. Create a demo page in `src/app/my-button/page.tsx` (optional but recommended)
4. Run `pnpm register` to build the registry
5. Commit and Push to main: `git acp "add: my-button"`

The component will automatically appear in the correct section:
- **Components**: UI components without "theme" in the name
- **Theme Components**: UI components with "theme" in the name  
- **Hooks**: Components with `type: "registry:hook"`

## Path Conversion & Target Installation

The build process automatically:
- Converts file paths from `ui/` to `ra3-ui/` 
- Adds `target` properties to install components in `components/ra3-ui/` directory

This ensures components are installed in the correct location when users run the shadcn CLI.

## Component Organization

The registry automatically organizes components based on their type and name:

- Components are grouped and displayed on the homepage
- Navigation sidebar is generated from the registry
- No manual maintenance of component lists required

## Meta Components

You can create meta-components that bundle multiple related components:

```ts
{
  name: "theme-set",
  type: "registry:ui",
  description: "Complete theme component collection",
  files: [
    { path: "ra3-ui/theme-provider.tsx", type: "registry:ui" },
    { path: "ra3-ui/theme-dropdown.tsx", type: "registry:ui" },
    { path: "ra3-ui/theme-toggle.tsx", type: "registry:ui" }
  ],
  dependencies: ["next-themes", "lucide-react"],
  registryDependencies: ["dropdown-menu", "button"]
}
``` 
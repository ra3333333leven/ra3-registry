# ra3 Registry

A component registry for ra3's components, built with [simple-shadcn-cli](https://github.com/Alwurts/simple-shadcn-cli).

View the component registry and demos at [ra3-registry.vercel.app](https://ra3-registry.vercel.app)

## Installing Components

Install components from this registry using the shadcn CLI:

```bash
npx shadcn@latest add https://ra3-registry.vercel.app/registry/my-button.json
```

# Adding Components

1. Create component in `src/registry/ra3-ui/`, `src/registry/lib/`, `src/registry/hooks/`, etc.
2. Register component in `src/registry/index.ts`:

```ts
export const registry: Registry = [
  {
    name: "my-button",
    type: "registry:ui", 
    description: "Custom button",
    files: [{ path: "ra3-ui/my-button.tsx", type: "registry:ui" }],
    dependencies: ["framer-motion"], // npm dependencies
    registryDependencies: ["button"] // shadcn components
  }
]
```

3. Run `pnpm register` to build the registry (automatically converts paths from `ui/` to `ra3-ui/`)
4. Commit and Push to main: `git acp "add: my-button"`

## Path Conversion & Target Installation

The build process automatically:
- Converts file paths from `ui/` to `ra3-ui/` 
- Adds `target` properties to install components in `components/ra3-ui/` directory

This ensures components are installed in the correct location when users run the shadcn CLI.

## Meta Components

You can create meta-components that bundle multiple related components:

```ts
{
  name: "theme-set",
  type: "registry:ui",
  description: "Complete theme system with provider, dropdown, and toggle",
  files: [
    { path: "ra3-ui/theme-provider.tsx", type: "registry:ui" },
    { path: "ra3-ui/theme-dropdown.tsx", type: "registry:ui" },
    { path: "ra3-ui/theme-toggle.tsx", type: "registry:ui" }
  ],
  dependencies: ["next-themes", "lucide-react"],
  registryDependencies: ["dropdown-menu", "button"]
}
```
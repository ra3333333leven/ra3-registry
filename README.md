# ra3 Registry

A component registry for ra3's components, built with [simple-shadcn-cli](https://github.com/Alwurts/simple-shadcn-cli).

View the component registry and demos at [ra3-registry.vercel.app](https://ra3-registry.vercel.app)

## Installing Components

Install components from this registry using the shadcn CLI:

```bash
npx shadcn@latest add https://ra3-registry.vercel.app/registry/my-button.json
```

# Adding Components
1. Create component in `src/registry/ui/`, `src/registry/lib/`, `src/registry/hooks/`, etc. (simple-shadcn-cli only supports `ui`, `lib`, `hook` for now)
2. Register component in src/registry/index.ts:

```ts
export const registry: Registry = [
  {
    name: "my-button",
    type: "registry:ui", 
    description: "Custom button",
    files: [{ path: "ui/my-button.tsx", type: "registry:ui" }]
  }
]
```

3. Run `pnpm register` to make simple-shadcn-cli build the registry.
4. Commit and Push to main: `git acp "add: my-button"`
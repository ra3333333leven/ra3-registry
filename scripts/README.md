# Scripts

Build and utility scripts for the ra3-registry project.

## add-target-paths.js

Automatically processes generated registry JSON files to add proper target installation paths.

### Configuration

The script uses these constants which can be easily modified:

```js
const REGISTRY_DIR = './public/registry'         // Where JSON files are located
const SOURCE_PATH_PREFIX = 'ui/'                 // Path prefix to convert from
const TARGET_PATH_PREFIX = 'ra3-ui/'             // Path prefix to convert to  
const TARGET_INSTALL_DIR = 'components/ra3-ui/'  // Where components install
```

### Usage

```bash
# Run as part of the build process
pnpm register

# Run standalone
pnpm add-targets
# or
node scripts/add-target-paths.js
```

### What it does

1. **Path Conversion**: `ui/component.tsx` → `ra3-ui/component.tsx`
2. **Target Addition**: Adds `target: 'components/ra3-ui/component.tsx'` 
3. **Registry Dependency Fixes**: Converts any remaining `undefined/registry/` URLs
4. **Multi-file Support**: Handles registry items with multiple files

### Why it's needed

The `simple-shadcn-cli` generates JSON with `ui/` paths by default. This script ensures:
- Components use the correct `ra3-ui/` path structure
- Components install to `components/ra3-ui/` directory via `target` property
- Users get components in the expected location when using shadcn CLI 
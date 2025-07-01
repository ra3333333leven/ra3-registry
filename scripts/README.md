# Scripts

This directory contains build and utility scripts for the ra3-registry project.

## convert-registry-paths.js

Automatically converts file paths in generated registry JSON files from `ui/` to `ra3-ui/` and fixes undefined registry dependency URLs.

### Usage

The script runs automatically as part of the `pnpm register` command, but can also be run manually:

```bash
# Run as part of the build process
pnpm register

# Run standalone
pnpm convert-paths
# or
node scripts/convert-registry-paths.js
```

### What it does

1. **Path Conversion**: Changes all file paths from `ui/component.tsx` to `ra3-ui/component.tsx`
2. **Registry Dependency Fixes**: Converts `undefined/registry/component.json` to `/registry/component.json`
3. **Multi-file Support**: Handles registry items with multiple files correctly
4. **Error Handling**: Gracefully handles parsing errors and missing files

### Why it's needed

The `simple-shadcn-cli` tool doesn't allow customization of the output path structure, so it defaults to `ui/` paths. This script ensures all generated JSON files use the correct `ra3-ui/` paths to match our project structure. 
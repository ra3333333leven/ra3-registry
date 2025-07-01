import fs from 'fs'
import path from 'path'

// Configuration constants
const REGISTRY_DIR = './public/registry'
const SOURCE_PATH_PREFIX = 'ui/'
const TARGET_PATH_PREFIX = 'ra3-ui/'
const TARGET_INSTALL_DIR = 'components/ra3-ui/'

// Ensure the registry directory exists
if (!fs.existsSync(REGISTRY_DIR)) {
  console.error(`❌ Registry directory not found: ${REGISTRY_DIR}`)
  process.exit(1)
}

// Get all JSON files in the registry directory
const jsonFiles = fs
  .readdirSync(REGISTRY_DIR)
  .filter((file) => file.endsWith('.json'))

if (jsonFiles.length === 0) {
  console.log('ℹ️  No JSON files found in registry directory')
  process.exit(0)
}

console.log(`🔍 Found ${jsonFiles.length} JSON files to process:`)
jsonFiles.forEach((file) => console.log(`  - ${file}`))

jsonFiles.forEach((filename) => {
  const filePath = path.join(REGISTRY_DIR, filename)

  try {
    // Read the JSON file
    const content = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(content)

    console.log(`\nProcessing ${filename}...`)

    // Track if any changes were made
    let hasChanges = false

    // Convert paths and add target properties
    if (jsonData.files && Array.isArray(jsonData.files)) {
      jsonData.files.forEach((file) => {
        // Convert source paths to target paths and add install target
        if (file.path && file.path.startsWith(SOURCE_PATH_PREFIX)) {
          const fileName = file.path.substring(SOURCE_PATH_PREFIX.length)
          const newPath = `${TARGET_PATH_PREFIX}${fileName}`
          const targetPath = `${TARGET_INSTALL_DIR}${fileName}`

          console.log(`  Changing path: ${file.path} -> ${newPath}`)
          console.log(`  Adding target: ${targetPath}`)

          file.path = newPath
          file.target = targetPath
          hasChanges = true
        }
      })
    }

    // Fix registry dependencies with undefined URLs (if any still exist)
    if (
      jsonData.registryDependencies &&
      Array.isArray(jsonData.registryDependencies)
    ) {
      jsonData.registryDependencies = jsonData.registryDependencies.map(
        (dep) => {
          if (
            typeof dep === 'string' &&
            dep.startsWith('undefined/registry/')
          ) {
            const newDep = dep.replace('undefined/registry/', '/registry/')
            console.log(`  Fixing registry dependency: ${dep} -> ${newDep}`)
            hasChanges = true
            return newDep
          }
          return dep
        }
      )
    }

    // Write back the file if changes were made
    if (hasChanges) {
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2))
      console.log(`  ✅ Updated ${filename}`)
    } else {
      console.log(`  ℹ️  No changes needed for ${filename}`)
    }
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message)
  }
})

console.log('\n🎉 Target paths added successfully!')

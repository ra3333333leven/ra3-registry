import fs from 'fs'
import path from 'path'

const registryDir = './public/registry'

// Ensure the registry directory exists
if (!fs.existsSync(registryDir)) {
  console.error(`❌ Registry directory not found: ${registryDir}`)
  process.exit(1)
}

// Get all JSON files in the registry directory
const jsonFiles = fs
  .readdirSync(registryDir)
  .filter((file) => file.endsWith('.json'))

if (jsonFiles.length === 0) {
  console.log('ℹ️  No JSON files found in registry directory')
  process.exit(0)
}

console.log(`🔍 Found ${jsonFiles.length} JSON files to process:`)
jsonFiles.forEach((file) => console.log(`  - ${file}`))

jsonFiles.forEach((filename) => {
  const filePath = path.join(registryDir, filename)

  try {
    // Read the JSON file
    const content = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(content)

    console.log(`\nProcessing ${filename}...`)

    // Track if any changes were made
    let hasChanges = false

    // Fix file paths and add target properties
    if (jsonData.files && Array.isArray(jsonData.files)) {
      jsonData.files.forEach((file) => {
        // Convert ui/ paths to ra3-ui/ and add target
        if (file.path && file.path.startsWith('ui/')) {
          const newPath = `ra3-ui/${file.path.substring(3)}`
          const targetPath = `components/ra3-ui/${file.path.substring(3)}`

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

console.log('\n🎉 Registry path fixing complete!')

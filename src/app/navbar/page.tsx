import { DemoPage } from '@/components/(shared)/demo-page'
import { NavBar } from '@/registry/ra3-ui/navbar'
import { Bell, Home, Settings, User } from 'lucide-react'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'

const demoNavigationItems = [
  { name: 'Home', href: '#', icon: <Home /> },
  { name: 'Profile', href: '#', icon: <User /> },
  { name: 'Settings', href: '#', icon: <Settings /> },
  { name: 'Notifications', href: '#', icon: <Bell /> },
]

const codeExample = `import { NavBar } from '@/components/ui/navbar'
import { Home, User, Settings, Bell } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/', icon: <Home /> },
  { name: 'Profile', href: '/profile', icon: <User /> },
  { name: 'Settings', href: '/settings', icon: <Settings /> },
  { name: 'Notifications', href: '/notifications', icon: <Bell /> },
]

export default function Example() {
  return (
    <NavBar 
      navigationItems={navigationItems} 
      withThemeToggle={true}
    />
  )
}`

export default function NavBarPage() {
  return (
    <DemoPage
      componentName={getNameFromRegistry('navbar')}
      componentDescription={getDescriptionFromRegistry('navbar')}
      previewContent={
        <NavBar
          navigationItems={demoNavigationItems}
          withThemeToggle={true}
          className="!static !left-auto !-translate-x-0 !z-auto !bottom-auto !mb-0 !top-auto !pt-0"
        />
      }
      codeExample={codeExample}
      installScriptComponentName="navbar"
    />
  )
}

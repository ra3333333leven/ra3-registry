'use client'

import * as React from 'react'
import { SearchIcon, PanelLeftIcon, PanelRightIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/components/ui/sidebar'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'

// This would be replaced with your actual registry in a real implementation
const mockRegistry = [
  {
    name: 'button',
    type: 'registry:ui',
    description:
      'Button with loading states, animated arrow, and rounded styling',
  },
  {
    name: 'card',
    type: 'registry:ui',
    description: 'Card component with title, description, and different styles',
  },
  {
    name: 'dialog',
    type: 'registry:ui',
    description: 'Dialog component with title, description, and actions',
  },
  {
    name: 'use-copy-to-clipboard',
    type: 'registry:hook',
    description: 'Custom hook for copying text with optional toasts',
  },
]

interface FloatingToolbarProps {
  className?: string
  disappearWhenSidebarOpen?: boolean
  highlightWhenSidebarOpen?: boolean
}

export function FloatingToolbar({
  className,
  disappearWhenSidebarOpen = false,
  highlightWhenSidebarOpen = false,
}: FloatingToolbarProps) {
  const [commandOpen, setCommandOpen] = React.useState(false)
  const { toggleSidebar, open: sidebarOpen } = useSidebar()
  const router = useRouter()

  // Handle CMD+K shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Navigate to component page
  const handleComponentSelect = (componentName: string) => {
    router.push(`/${componentName}`)
    setCommandOpen(false)
  }

  return (
    <>
      <div
        className={cn(
          'fixed right-6 top-6 z-50 transition-all duration-300 ease-out',
          disappearWhenSidebarOpen &&
            sidebarOpen &&
            'opacity-0 scale-75 translate-x-4 pointer-events-none',
          className
        )}
      >
        <div className="flex items-center gap-3 bg-background/10 border border-border backdrop-blur-sm p-1 rounded-full shadow-lg">
          {/* Command Palette Trigger */}
          <button
            onClick={() => setCommandOpen(true)}
            className="relative cursor-pointer text-base font-semibold p-2 rounded-full transition-colors text-foreground hover:text-primary hover:bg-muted/60"
          >
            <SearchIcon size={22} />
            <span className="sr-only">Search Components (⌘K)</span>
          </button>

          {/* Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className={cn(
              'relative cursor-pointer text-base font-semibold p-2 rounded-full transition-colors',
              'text-foreground hover:text-primary hover:bg-muted/60',
              highlightWhenSidebarOpen && sidebarOpen && 'bg-muted text-primary'
            )}
          >
            {sidebarOpen ? (
              <PanelLeftIcon size={22} />
            ) : (
              <PanelRightIcon size={22} />
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </button>
        </div>
      </div>

      {/* Command Palette Dialog */}
      <CommandDialog
        open={commandOpen}
        onOpenChange={setCommandOpen}
        title="Component Search"
        description="Search and navigate to components"
      >
        <CommandInput
          placeholder="Search components..."
          className="text-base"
        />
        <CommandList>
          <CommandEmpty className="text-base">
            No components found.
          </CommandEmpty>
          <CommandGroup heading="Components">
            {mockRegistry
              .filter((item) => item.type === 'registry:ui' && item.name)
              .map((component) => (
                <CommandItem
                  key={component.name}
                  onSelect={() => handleComponentSelect(component.name)}
                  className="cursor-pointer text-base py-3"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{component.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {component.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Hooks">
            {mockRegistry
              .filter((item) => item.type === 'registry:hook' && item.name)
              .map((component) => (
                <CommandItem
                  key={component.name}
                  onSelect={() => handleComponentSelect(component.name)}
                  className="cursor-pointer text-base py-3"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{component.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {component.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

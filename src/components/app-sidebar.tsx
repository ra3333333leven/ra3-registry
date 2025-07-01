'use client'

import { PanelLeftIcon, PanelRightIcon } from 'lucide-react'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

// This is sample data.
type NavItem = {
  title: string
  url: string
  isActive?: boolean
}

type NavMain = {
  title: string
  url: string
  items?: NavItem[]
}

const data: { navMain: NavMain[] } = {
  navMain: [
    {
      title: 'Components',
      url: '/',
      items: [
        {
          title: 'Button',
          url: '/button',
        },
        {
          title: 'Container',
          url: '/container',
        },
        {
          title: 'Copy Clip',
          url: '/copy-clip',
        },
        {
          title: 'Loading',
          url: '/loading',
        },
        {
          title: 'Navbar',
          url: '/navbar',
        },
        {
          title: 'Placeholder',
          url: '/placeholder',
        },
        {
          title: 'Theme Provider',
          url: '/theme-provider',
        },
        {
          title: 'Theme Dropdown',
          url: '/theme-dropdown',
        },
        {
          title: 'Theme Toggle',
          url: '/theme-toggle',
        },
        {
          title: 'Theme Set',
          url: '/theme-set',
        },
      ],
    },
    {
      title: 'Hooks',
      url: '/',
      items: [
        {
          title: 'Use Copy to Clipboard',
          url: '/use-copy-to-clipboard',
        },
      ],
    },
  ],
}

export function AppSidebarTrigger({
  className,
  onClick,
  disappearWhenOpen = false,
  highlightWhenOpen = false,
  ...props
}: React.ComponentProps<'button'> & {
  disappearWhenOpen?: boolean
  highlightWhenOpen?: boolean
}) {
  const { toggleSidebar, open } = useSidebar()

  return (
    <div
      className={cn(
        'flex items-center gap-3 bg-background/10 border border-border backdrop-blur-sm p-1 rounded-full shadow-lg transition-all duration-300 ease-out',
        disappearWhenOpen &&
          open &&
          'opacity-0 scale-75 translate-x-4 pointer-events-none',
        className
      )}
    >
      <button
        onClick={(event) => {
          onClick?.(event)
          toggleSidebar()
        }}
        className={cn(
          'relative cursor-pointer text-base font-semibold p-2 rounded-full transition-colors',
          'text-foreground hover:text-primary hover:bg-muted/60',
          highlightWhenOpen && open && 'bg-muted text-primary'
        )}
        {...props}
      >
        {open ? <PanelLeftIcon size={22} /> : <PanelRightIcon size={22} />}
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    </div>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex justify-end mb-4 pt-4 pr-6">
              <AppSidebarTrigger className="border-none bg-transparent shadow-none" />
            </div>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="font-semibold text-xl text-foreground/90"
                    >
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={item.isActive}
                            size="md"
                            className="font-light text-foreground/80"
                          >
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

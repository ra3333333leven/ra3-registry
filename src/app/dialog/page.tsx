'use client'

import { ComponentPreview } from '@/components/(shared)/component-preview'
import { CodeExample } from '@/components/(shared)/code-example'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { Dialog } from '@/registry/ra3-ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { Settings, Edit3, Trash2, Save } from 'lucide-react'
import { toast } from 'sonner'

export default function DialogPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('dialog')}
          description={getDescriptionFromRegistry('dialog')}
        />

        {/* Basic Dialog Usage */}
        <ComponentPreview
          title="Basic Dialog"
          description="Simple dialog with title, description, and children content"
          preview={
            <Dialog
              title="Edit Profile"
              description="Make changes to your profile information"
              trigger={
                <Button>
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              }
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    className="w-full p-2 border rounded-md"
                    defaultValue="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="w-full p-2 border rounded-md"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </Dialog>
          }
          code={`<Dialog
  title="Edit Profile"
  description="Make changes to your profile information"
  trigger={<Button>Edit Profile</Button>}
>
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">Name</label>
      <input className="w-full p-2 border rounded-md" defaultValue="John Doe" />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">Email</label>
      <input className="w-full p-2 border rounded-md" defaultValue="john@example.com" />
    </div>
  </div>
</Dialog>`}
        />

        {/* Dialog Sizes */}
        <ComponentPreview
          title="Dialog Sizes"
          description="Control dialog size using the size prop"
          preview={
            <div className="flex flex-wrap gap-4">
              <Dialog
                title="Small Dialog"
                description="This is a small dialog"
                size="sm"
                trigger={<Button variant="outline">Small</Button>}
              >
                <p>Small dialog content</p>
              </Dialog>

              <Dialog
                title="Large Dialog"
                description="This is a large dialog"
                size="xl"
                trigger={<Button variant="outline">Large</Button>}
              >
                <p>Large dialog content with more space</p>
              </Dialog>

              <Dialog
                title="Full Screen Dialog"
                description="This dialog takes up the entire screen"
                size="screen"
                trigger={<Button variant="outline">Full Screen</Button>}
              >
                <div className="p-8">
                  <p>Full screen dialog content</p>
                </div>
              </Dialog>
            </div>
          }
          code={`// Small dialog
<Dialog size="sm" title="Small Dialog" trigger={<Button>Small</Button>}>
  <p>Small dialog content</p>
</Dialog>

// Large dialog
<Dialog size="xl" title="Large Dialog" trigger={<Button>Large</Button>}>
  <p>Large dialog content</p>
</Dialog>

// Full screen dialog
<Dialog size="screen" title="Full Screen" trigger={<Button>Full Screen</Button>}>
  <div className="p-8">
    <p>Full screen dialog content</p>
  </div>
</Dialog>`}
        />

        {/* Dialog with Actions */}
        <ComponentPreview
          title="Dialog with Actions"
          description="Add primary and secondary actions to your dialog"
          preview={
            <div className="flex flex-wrap gap-4">
              <Dialog
                title="Save Changes"
                description="Do you want to save your changes?"
                primaryAction={() => toast.success('Changes saved!')}
                primaryActionText="Save"
                trigger={
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Save Dialog
                  </Button>
                }
              >
                <p>Your changes will be saved to the database.</p>
              </Dialog>

              <Dialog
                title="Delete Item"
                description="This action cannot be undone"
                primaryAction={() => toast.error('Item deleted!')}
                primaryActionText="Delete"
                secondaryAction={() => toast.info('Cancelled')}
                secondaryActionText="Cancel"
                trigger={
                  <Button variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                }
              >
                <p>Are you sure you want to delete this item?</p>
              </Dialog>
            </div>
          }
          code={`// Dialog with primary action only
<Dialog
  title="Save Changes"
  primaryAction={() => handleSave()}
  primaryActionText="Save"
  trigger={<Button>Save Dialog</Button>}
>
  <p>Your changes will be saved.</p>
</Dialog>

// Dialog with primary and secondary actions
<Dialog
  title="Delete Item"
  primaryAction={() => handleDelete()}
  primaryActionText="Delete"
  secondaryAction={() => handleCancel()}
  secondaryActionText="Cancel"
  trigger={<Button variant="destructive">Delete</Button>}
>
  <p>Are you sure you want to delete this item?</p>
</Dialog>`}
        />

        {/* Custom Action Components */}
        <ComponentPreview
          title="Custom Action Components"
          description="Use React components instead of functions for more control"
          preview={
            <Dialog
              title="Custom Actions"
              description="Dialog with custom action components"
              primaryAction={
                <Button onClick={() => toast.success('Custom action!')}>
                  <Settings className="w-4 h-4 mr-2" />
                  Custom Primary
                </Button>
              }
              secondaryAction={
                <DialogClose asChild>
                  <Button variant="outline">Custom Cancel</Button>
                </DialogClose>
              }
              trigger={<Button variant="outline">Custom Actions</Button>}
            >
              <p>This dialog uses custom React components for actions.</p>
            </Dialog>
          }
          code={`<Dialog
  title="Custom Actions"
  primaryAction={
    <Button onClick={handleCustomAction}>
      <Settings className="w-4 h-4 mr-2" />
      Custom Primary
    </Button>
  }
  secondaryAction={
    <DialogClose asChild>
      <Button variant="outline">Custom Cancel</Button>
    </DialogClose>
  }
  trigger={<Button>Custom Actions</Button>}
>
  <p>Custom action components give you full control.</p>
</Dialog>`}
        />

        {/* Action Control Options */}
        <ComponentPreview
          title="Action Control Options"
          description="Control action behavior with various flags"
          preview={
            <div className="flex flex-wrap gap-4">
              <Dialog
                title="Non-Closing Action"
                description="Action that doesn't close the dialog"
                primaryAction={() => toast.success('Action executed!')}
                primaryActionText="Execute"
                primaryActionClose={false}
                trigger={<Button variant="outline">Non-Closing</Button>}
              >
                <p>The primary action won&apos;t close this dialog.</p>
              </Dialog>

              <Dialog
                title="No Cancel Button"
                description="Dialog without cancel button"
                primaryAction={() => toast.success('Confirmed!')}
                primaryActionText="Confirm"
                showCancelButton={false}
                trigger={<Button variant="outline">No Cancel</Button>}
              >
                <p>This dialog has no cancel button.</p>
              </Dialog>

              <Dialog
                title="No Close Button"
                description="Dialog without X close button"
                primaryAction={() => toast.success('Done!')}
                primaryActionText="Done"
                showCloseButton={false}
                trigger={<Button variant="outline">No X Button</Button>}
              >
                <p>This dialog has no X close button in the header.</p>
              </Dialog>
            </div>
          }
          code={`// Action that doesn't close dialog
<Dialog
  primaryAction={() => handleAction()}
  primaryActionClose={false}
  trigger={<Button>Non-Closing</Button>}
>
  <p>Action won't close the dialog</p>
</Dialog>

// Hide cancel button
<Dialog
  primaryAction={() => handleAction()}
  showCancelButton={false}
  trigger={<Button>No Cancel</Button>}
>
  <p>No cancel button shown</p>
</Dialog>

// Hide X close button
<Dialog
  primaryAction={() => handleAction()}
  showCloseButton={false}
  trigger={<Button>No X Button</Button>}
>
  <p>No X close button in header</p>
</Dialog>`}
        />

        {/* Code Examples */}
        <CodeExample
          title="Basic Usage"
          description="Import and use the Dialog component"
          code={`import { Dialog } from '@/registry/ra3-ui/dialog'
import { Button } from '@/components/ui/button'

export default function Example() {
  const handleSave = () => {
    // Handle save logic
    console.log('Saving...')
  }

  return (
    <Dialog
      title="Edit Settings"
      description="Make changes to your settings"
      primaryAction={handleSave}
      primaryActionText="Save Changes"
      trigger={<Button>Open Dialog</Button>}
    >
      <div className="space-y-4">
        <input placeholder="Setting 1" className="w-full p-2 border rounded" />
        <input placeholder="Setting 2" className="w-full p-2 border rounded" />
      </div>
    </Dialog>
  )
}`}
        />

        {/* Installation */}
        <InstallScript componentName="dialog" />
      </FlexColSpacing>
    </PageContainer>
  )
}

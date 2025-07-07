'use client'

import { ComponentPreview } from '@/components/(shared)/component-preview'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { Dialog } from '@/registry/ra3-ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { Settings, User, X, FileText, Edit3, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const codeExample = `'use client'

import { Dialog } from '@/registry/ra3-ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Settings, User, Save, X, FileText, Edit3 } from 'lucide-react'
import { toast } from 'sonner'

export default function Example() {
  const handleSave = () => {
    toast.success('Settings saved!')
  }

  const handleDelete = () => {
    toast.error('Profile deleted!')
  }

  const handleUpdate = () => {
    toast.success('Profile updated!')
  }

  return (
    <div className="space-y-6">
      {/* Basic Dialog with Function Actions */}
      <Dialog
        title="Edit Settings"
        description="Make changes to your account settings here."
        primaryAction={handleSave}
        primaryActionText="Save Changes"
        secondaryAction={() => toast.info('Changes cancelled')}
        secondaryActionText="Cancel"
        trigger={
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Edit Settings
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <input className="w-full p-2 border rounded-md" defaultValue="john_doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input className="w-full p-2 border rounded-md" defaultValue="john@example.com" />
          </div>
        </div>
      </Dialog>

      {/* Dialog with Custom Action Components */}
      <Dialog
        title="Delete Profile"
        description="This action cannot be undone. Are you sure you want to delete your profile?"
        primaryAction={
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Forever
          </Button>
        }
        secondaryAction={
          <DialogClose asChild>
            <Button variant="outline">
              <X className="w-4 h-4 mr-2" />
              Keep Profile
            </Button>
          </DialogClose>
        }
        trigger={
          <Button variant="destructive">
            <User className="w-4 h-4 mr-2" />
            Delete Profile
          </Button>
        }
      >
        <div className="p-4 bg-red-50 rounded-md">
          <p className="text-sm text-red-700">
            Warning: This will permanently delete your profile and all associated data.
          </p>
        </div>
      </Dialog>

      {/* Large Dialog with Rich Content */}
      <Dialog
        title="Create New Document"
        description="Choose a template and configure your new document."
        size="2xl"
        primaryAction={handleUpdate}
        primaryActionText="Create Document"
        trigger={
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            New Document
          </Button>
        }
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted">
              <h3 className="font-medium">Blank Document</h3>
              <p className="text-sm text-muted-foreground">Start with a clean slate</p>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted">
              <h3 className="font-medium">Report Template</h3>
              <p className="text-sm text-muted-foreground">Pre-formatted report layout</p>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Document Name</label>
            <input className="w-full p-2 border rounded-md" placeholder="Enter document name" />
          </div>
        </div>
      </Dialog>

      {/* Dialog without Footer Actions */}
      <Dialog
        title="Information"
        description="This dialog only displays information."
        showCloseButton={true}
        trigger={
          <Button variant="outline">
            Info Dialog
          </Button>
        }
      >
        <div className="space-y-4">
          <p>This is an informational dialog that doesn't require any actions.</p>
          <p className="text-sm text-muted-foreground">
            Users can close it using the X button or by clicking outside.
          </p>
        </div>
      </Dialog>
    </div>
  )
}`

function DialogPreview() {
  const handleSave = () => {
    toast.success('Settings saved!')
  }

  const handleDelete = () => {
    toast.error('Profile deleted!')
  }

  const handleUpdate = () => {
    toast.success('Document created!')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-base font-medium mb-1">Function Actions</h4>
        <p className="text-base text-muted-foreground mb-3">
          Dialog with function-based primary and secondary actions
        </p>
        <Dialog
          title="Edit Settings"
          description="Make changes to your account settings here."
          primaryAction={handleSave}
          primaryActionText="Save Changes"
          secondaryAction={() => toast.info('Changes cancelled')}
          secondaryActionText="Cancel"
          trigger={
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Edit Settings
            </Button>
          }
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <input
                className="w-full p-2 border rounded-md"
                defaultValue="john_doe"
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
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Custom Action Components</h4>
        <p className="text-base text-muted-foreground mb-3">
          Dialog with custom React components as actions
        </p>
        <Dialog
          title="Delete Profile"
          description="This action cannot be undone. Are you sure?"
          primaryAction={
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Forever
            </Button>
          }
          secondaryAction={
            <DialogClose asChild>
              <Button variant="outline">
                <X className="w-4 h-4 mr-2" />
                Keep Profile
              </Button>
            </DialogClose>
          }
          trigger={
            <Button variant="destructive">
              <User className="w-4 h-4 mr-2" />
              Delete Profile
            </Button>
          }
        >
          <div className="p-4 bg-red-50 rounded-md">
            <p className="text-sm text-red-700">
              Warning: This will permanently delete your profile and all
              associated data.
            </p>
          </div>
        </Dialog>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Large Dialog</h4>
        <p className="text-base text-muted-foreground mb-3">
          Dialog with custom size and rich content
        </p>
        <Dialog
          title="Create New Document"
          description="Choose a template and configure your new document."
          size="xl"
          primaryAction={handleUpdate}
          primaryActionText="Create Document"
          trigger={
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              New Document
            </Button>
          }
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted">
                <h3 className="font-medium">Blank Document</h3>
                <p className="text-sm text-muted-foreground">
                  Start with a clean slate
                </p>
              </div>
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted">
                <h3 className="font-medium">Report Template</h3>
                <p className="text-sm text-muted-foreground">
                  Pre-formatted report layout
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Document Name</label>
              <input
                className="w-full p-2 border rounded-md"
                placeholder="Enter document name"
              />
            </div>
          </div>
        </Dialog>
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Info Only Dialog</h4>
        <p className="text-base text-muted-foreground mb-3">
          Dialog without footer actions
        </p>
        <Dialog
          title="Information"
          description="This dialog only displays information."
          showCloseButton={true}
          trigger={<Button variant="outline">Info Dialog</Button>}
        >
          <div className="space-y-4">
            <p>
              This is an informational dialog that doesn&apos;t require any
              actions.
            </p>
            <p className="text-sm text-muted-foreground">
              Users can close it using the X button or by clicking outside.
            </p>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default function DialogPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('dialog')}
          description={getDescriptionFromRegistry('dialog')}
        />

        {/* Basic Usage Demo */}
        <ComponentPreview
          title="Basic Dialog Usage"
          description="Simple dialog with title, description, and action functions"
          preview={
            <Dialog
              title="Edit Profile"
              description="Make changes to your profile here. Click save when you're done."
              primaryAction={() => toast.success('Profile updated!')}
              primaryActionText="Save Changes"
              secondaryAction={() => toast.info('Changes cancelled')}
              secondaryActionText="Cancel"
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
                  <label className="text-sm font-medium">Bio</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    defaultValue="Software developer passionate about creating great user experiences."
                  />
                </div>
              </div>
            </Dialog>
          }
          code={`import { Dialog } from '@/registry/ra3-ui/dialog'
import { Button } from '@/components/ui/button'
import { Edit3 } from 'lucide-react'
import { toast } from 'sonner'

export default function Example() {
  const handleSave = () => {
    toast.success('Profile updated!')
  }

  const handleCancel = () => {
    toast.info('Changes cancelled')
  }

  return (
    <Dialog
      title="Edit Profile"
      description="Make changes to your profile here. Click save when you&apos;re done."
      primaryAction={handleSave}
      primaryActionText="Save Changes"
      secondaryAction={handleCancel}
      secondaryActionText="Cancel"
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
          <input className="w-full p-2 border rounded-md" defaultValue="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <textarea className="w-full p-2 border rounded-md" rows={3} defaultValue="Software developer passionate about creating great user experiences." />
        </div>
      </div>
    </Dialog>
  )
}`}
        />

        {/* All Variants Demo */}
        <ComponentPreview
          title="Dialog Variants"
          description="Comprehensive showcase of all dialog styles and configurations"
          preview={<DialogPreview />}
          code={codeExample}
        />

        {/* Installation */}
        <InstallScript componentName="dialog" />
      </FlexColSpacing>
    </PageContainer>
  )
}

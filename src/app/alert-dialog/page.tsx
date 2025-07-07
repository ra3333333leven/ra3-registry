'use client'

import { ComponentPreview } from '@/components/(shared)/component-preview'
import { TitleDesc } from '@/registry/ra3-ui/typography'
import { InstallScript } from '@/components/(shared)/install-script'
import { PageContainer, FlexColSpacing } from '@/registry/ra3-ui/container'
import { AlertDialog } from '@/registry/ra3-ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { AlertDialogAction } from '@/components/ui/alert-dialog'
import { getNameFromRegistry, getDescriptionFromRegistry } from '@/lib/utils'
import { Save, AlertTriangle, Info } from 'lucide-react'
import { toast } from 'sonner'

const codeExample = `'use client'

import { AlertDialog } from '@/registry/ra3-ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { AlertDialogAction } from '@/components/ui/alert-dialog'
import { Save, AlertTriangle, Info } from 'lucide-react'
import { toast } from 'sonner'

export default function Example() {
  const handleDelete = () => {
    toast.success('Item deleted successfully!')
  }

  const handleSave = () => {
    toast.success('Changes saved!')
  }

  return (
    <div className="space-y-6">
      {/* Basic Alert Dialog with Function Action */}
      <AlertDialog
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        action={handleDelete}
        actionText="Delete"
        destructive
        trigger={<Button variant="destructive">Delete Item</Button>}
      />

      {/* Alert Dialog with Custom Action Component */}
      <AlertDialog
        title="Save Changes"
        description="Do you want to save your changes before leaving?"
        action={
          <AlertDialogAction onClick={handleSave} className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </AlertDialogAction>
        }
        trigger={<Button>Save & Exit</Button>}
      />

      {/* Alert Dialog with Custom Cancel Text */}
      <AlertDialog
        title="Confirm Action"
        description="This will perform an important action. Are you sure?"
        action={() => toast.info('Action confirmed!')}
        cancelText="Go Back"
        actionText="Yes, Continue"
        trigger={<Button variant="outline">Confirm Action</Button>}
      />

      {/* Alert Dialog with Children Content */}
      <AlertDialog
        title="Warning"
        description="This action may have consequences."
        action={() => toast.warning('Proceeding despite warning!')}
        actionText="Proceed Anyway"
        destructive
        trigger={
          <Button variant="outline" className="text-yellow-600">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Warning Action
          </Button>
        }
      >
        <div className="py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4" />
            <span>Additional information can be placed here as children.</span>
          </div>
        </div>
      </AlertDialog>
    </div>
  )
}`

function AlertDialogPreview() {
  const handleDelete = () => {
    toast.success('Item deleted successfully!')
  }

  const handleSave = () => {
    toast.success('Changes saved!')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-base font-medium mb-1">Function Action</h4>
        <p className="text-base text-muted-foreground mb-3">
          Alert dialog with a function that executes on action
        </p>
        <AlertDialog
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          action={handleDelete}
          actionText="Delete"
          destructive
          trigger={<Button variant="destructive">Delete Item</Button>}
        />
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Custom Action Component</h4>
        <p className="text-base text-muted-foreground mb-3">
          Alert dialog with a custom React component as action
        </p>
        <AlertDialog
          title="Save Changes"
          description="Do you want to save your changes before leaving?"
          action={
            <AlertDialogAction
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </AlertDialogAction>
          }
          trigger={<Button>Save & Exit</Button>}
        />
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">Custom Cancel Text</h4>
        <p className="text-base text-muted-foreground mb-3">
          Alert dialog with custom cancel button text
        </p>
        <AlertDialog
          title="Confirm Action"
          description="This will perform an important action. Are you sure?"
          action={() => toast.info('Action confirmed!')}
          cancelText="Go Back"
          actionText="Yes, Continue"
          trigger={<Button variant="outline">Confirm Action</Button>}
        />
      </div>

      <div>
        <h4 className="text-base font-medium mb-1">With Children Content</h4>
        <p className="text-base text-muted-foreground mb-3">
          Alert dialog with additional content as children
        </p>
        <AlertDialog
          title="Warning"
          description="This action may have consequences."
          action={() => toast.warning('Proceeding despite warning!')}
          actionText="Proceed Anyway"
          destructive
          trigger={
            <Button variant="outline" className="text-yellow-600">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Warning Action
            </Button>
          }
        >
          <div className="py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4" />
              <span>
                Additional information can be placed here as children.
              </span>
            </div>
          </div>
        </AlertDialog>
      </div>
    </div>
  )
}

export default function AlertDialogPage() {
  return (
    <PageContainer>
      <FlexColSpacing>
        {/* Header */}
        <TitleDesc
          title={getNameFromRegistry('alert-dialog')}
          description={getDescriptionFromRegistry('alert-dialog')}
        />

        {/* Basic Usage Demo */}
        <ComponentPreview
          title="Basic Alert Dialog Usage"
          description="Simple alert dialog with title, description, and action function"
          preview={
            <AlertDialog
              title="Are you absolutely sure?"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              action={() => toast.error('Account deleted!')}
              actionText="Delete Account"
              destructive
              trigger={<Button variant="destructive">Delete Account</Button>}
            />
          }
          code={`import { AlertDialog } from '@/registry/ra3-ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Example() {
  const handleDelete = () => {
    toast.error('Account deleted!')
  }

  return (
    <AlertDialog
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      action={handleDelete}
      actionText="Delete Account"
      destructive
      trigger={<Button variant="destructive">Delete Account</Button>}
    />
  )
}`}
        />

        {/* All Variants Demo */}
        <ComponentPreview
          title="Alert Dialog Variants"
          description="Comprehensive showcase of all alert dialog styles and configurations"
          preview={<AlertDialogPreview />}
          code={codeExample}
        />

        {/* Installation */}
        <InstallScript componentName="alert-dialog" />
      </FlexColSpacing>
    </PageContainer>
  )
}

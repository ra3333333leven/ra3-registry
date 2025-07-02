interface TitleDescProps {
  title?: string
  description?: string
}

export function TitleDesc({ title, description }: TitleDescProps) {
  return (
    <div className="space-y-4">
      {title && <h1 className="text-5xl font-bold">{title}</h1>}
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

interface HeaderDescProps {
  title?: string
  description?: string
}

export function HeaderDesc({ title, description }: HeaderDescProps) {
  return (
    <div className="space-y-4">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

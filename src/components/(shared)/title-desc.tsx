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

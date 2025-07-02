// Utility function to generate internal dependency URLs
export const toInternalRegistryUrl = (componentName: string) =>
  `${process.env.NEXT_PUBLIC_URL}/registry/${componentName}.json`

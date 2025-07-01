import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to generate internal dependency URLs
export const toInternalRegistryUrl = (componentName: string) =>
  `${process.env.NEXT_PUBLIC_URL}/registry/${componentName}.json`

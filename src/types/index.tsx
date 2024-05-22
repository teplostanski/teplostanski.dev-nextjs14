import { ReactNode } from 'react'

export type PostMetadata = { [key: string]: any }
export type Slug = string

export interface ChildrenProps {
  children: ReactNode
}

export interface projectPageProps {
  params: { slug: Slug }
}

export interface PrefixedImageProps {
  src: string
  alt: string
}

// src/app/components/ProjectDetail.tsx
// Общий компонент, отвечающий за детальную страницу поста

import { getPostContent } from '@/utils/getPostContent'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import { type Slug } from '@/types'

type Props = {
  locale: 'ru' | 'en'
  slug: Slug
}

export default function ProjectDetail({ locale, slug }: Props) {
  const folderPath = `src/projects/${locale}`
  const { content, data } = getPostContent(folderPath, slug)

  return (
    <section>
      <MarkdownRender content={content} />
    </section>
  )
}

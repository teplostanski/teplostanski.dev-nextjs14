// src/app/projects/page.tsx
// Список проектов на русском

import getPostMetadata from '@/utils/getPostMetadata'
import Preview from '@/app/components/Preview'

export default function ProjectsPage() {
  // Загружаем посты из ru
  const postMetadata = getPostMetadata('src/projects/ru')

  return (
    <section>
      <h1>Projects (RU)</h1>
      <Preview postMetadata={postMetadata} locale='ru' />
    </section>
  )
}

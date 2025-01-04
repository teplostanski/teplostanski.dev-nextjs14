// src/app/components/ProjectList.tsx

import getPostMetadata from '@/utils/getPostMetadata'
import Preview from '@/app/components/Preview'

type Props = {
  locale: 'ru' | 'en'
}

export default function ProjectList({ locale }: Props) {
  const folderPath = `src/projects/${locale}`
  const postMetadata = getPostMetadata(folderPath)

  return (
    <section>
      {/* передаём locale */}
      <Preview postMetadata={postMetadata} locale={locale} />
    </section>
  )
}

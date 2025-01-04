// src/utils/getPostMetadata.ts
// Возвращает массив метаданных из указанной папки

import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath: string) {
  const folder = basePath + '/'
  const files = fs.readdirSync(folder).filter((file) => file.endsWith('.md'))

  return files.map((filename) => {
    const fileContents = fs.readFileSync(folder + filename, 'utf8')
    const matterResult = matter(fileContents)

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      prep_time: matterResult.data.prep_time,
      cook_time: matterResult.data.cook_time,
      slug: filename.replace('.md', ''),
      img: matterResult.data.img,
      bio: matterResult.data.bio,
    }
  })
}

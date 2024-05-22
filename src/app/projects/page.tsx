import Preview from '@/app/components/Preview'
import getPostMetadata from '@/utils/getPostMetadata'

export default function projects() {
  const postMetadata = getPostMetadata('src/projects')
  console.log(postMetadata)

  return (
    <>
      <Preview postMetadata={postMetadata} />
    </>
  )
}

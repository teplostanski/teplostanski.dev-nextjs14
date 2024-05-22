//import Preview from '@/app/components/Preview'
//import getPostMetadata from '@/utils/getPostMetadata'
import Main from '@/app/components/Main/Main'
import Links from './components/Links/Links'
import Skills from './components/Skills/Skills'

export default function Home() {
  //const postMetadata = getPostMetadata('src/projects')
  //console.log(postMetadata)

  return (
    <main>
      <Main />
      <Skills />
      <Links />
    </main>
  )
}

import { useQueryState } from 'nuqs'
import About from './components/About/About'
import Links from './components/Links/Links'

export default function Home() {
  const [locale] = useQueryState('locale')
  console.log(locale)

  return (
    <>
      <h1 style={{}}>игорь теплостанский</h1>
      <p>Всё в порядке! Css стили подгрузились ;3</p>
      <About />
      <Links />
    </>
  )
}

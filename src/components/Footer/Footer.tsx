import { LocaleRouteSwitcher } from '../LocaleRouteSwitcher'

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <footer style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
      <p>&copy; 2022-{currentYear}</p>
      <LocaleRouteSwitcher />
    </footer>
  )
}

export default Footer

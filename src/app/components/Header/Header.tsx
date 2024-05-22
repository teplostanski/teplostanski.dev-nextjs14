import Link from 'next/link'
import { nanoid } from 'nanoid'
import styles from './Header.module.scss'
import Button from '../Button/Button'

const Header = () => {
  const navItems = [
    {
      id: 'nav_block_contacts',
      name: 'Контакты',
      path: '#contacts',
    },
    {
      id: 'nav_block_projects',
      name: 'Проекты',
      path: '/projects',
    },
  ]

  return (
    <header className={styles.container}>
      <Link className={styles.logo} href={'/'}>
        <span className={styles.logo__text}>teplostanski</span>
        <span className={styles.logo__dot}>.dev</span>
      </Link>
      <nav className={styles.nav}>
        {navItems.map(({ id, name, path }) => (
          <ul className={styles.nav__list} key={nanoid()}>
            <li id={id}>
              <Button>
                <Link href={path}>{name}</Link>
              </Button>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header

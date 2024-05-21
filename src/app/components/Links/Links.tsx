// src/Links.tsx
import { links } from './Links.constants'
import { convertEmailLink } from '@/utils/convertLinks'
import styles from './Links.module.scss'

const Links = () => {
  const isEmailLink = (key: string, value: string) => {
    if (key === 'email') {
      return convertEmailLink(value)
    } else {
      return `https://${value}`
    }
  }

  return (
    <section id='contacts' className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className='title'>Контакты</h2>
        <div className={styles.block}>
          {Object.entries(links).map(([key, value], i) => (
            <div key={i} className={styles.links}>
              <a
                className={styles.link}
                href={isEmailLink(key, value)}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className={styles.body}>
                  {key}
                  <span className={styles.arrow}></span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Links

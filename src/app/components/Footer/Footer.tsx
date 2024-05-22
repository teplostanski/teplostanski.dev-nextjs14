import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span>Igor Teplostanski</span> <span>&copy; 2022-2024</span>
        <span className={styles.second}>
          Создано с помощью{' '}
          <a
            className={styles.link}
            target='_blank'
            href='https://github.com/teplostanski/nextjs14-gh-pages-markdown-static-blog-starter-kit'
          >
            nextjs14-gh-pages-markdown-static-blog-starter-kit
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

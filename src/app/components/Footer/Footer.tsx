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
            href='https://github.com/teplostanski/nextjs14-gh-pages-static-blog-template'
          >
            nextjs14-gh-pages-markdown-static-blog-template
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

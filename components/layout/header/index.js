import styles from "./styles.module.scss"

const Header = () => (
  <h1 className={styles.title}>
    <a href="https://www.nytimes.com/books/best-sellers/" target="_blank" rel="noopener noreferrer">
      NYT
    </a>
    &nbsp; Bestselling Books
  </h1>
)

export default Header

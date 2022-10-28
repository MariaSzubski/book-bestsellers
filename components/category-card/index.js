import Image from "next/image"
import styles from "./styles.module.scss"

const CategoryCard = ({ content }) => (
  <a href={`/books/${content.list_name_encoded}`} className={styles.category_card}>
    <img
      src={content.books[0].book_image}
      className={styles.hero}
      alt={`Book Cover: ${content.books[0].title} ${content.books[0].contributer}`}
    />
    <h2>{content.display_name} &rarr;</h2>
  </a>
)

export default CategoryCard

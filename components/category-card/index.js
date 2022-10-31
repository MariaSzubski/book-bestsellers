import styles from "./styles.module.scss"

const CategoryCard = ({ content }) => {
  const top_book = content.books[0]

  return (
    <a href={`/category/${content.list_name_encoded}`} className={styles.category_card}>
      <img
        src={top_book.book_image}
        className={styles.hero}
        alt={`Book Cover: ${top_book.title} ${top_book.contributer}`}
      />
      <h2>{content.display_name} &rarr;</h2>
    </a>
  )
}

export default CategoryCard

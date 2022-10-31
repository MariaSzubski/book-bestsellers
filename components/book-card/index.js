import styles from "./styles.module.scss"

const BookCard = ({ book_image, title, contributor, rank_last_week, publisher, description }) => (
  <li className={styles.book}>
    <img src={book_image} alt={title} />
    <div>
      <strong>{title}</strong> <em>{contributor}</em>
      <p>Change since last week: {rank_last_week}</p>
      <small>Publisher: {publisher}</small>
      <p>{description}</p>
    </div>
  </li>
)

export default BookCard

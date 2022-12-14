import BookCard from "../../components/book-card"
import Layout from "../../components/layout"

import { api } from "../../utilities"

const Category = ({ copyright, results }) => (
  <Layout copyright={copyright}>
    <h1>{results.display_name}</h1>
    <h2>Bestsellers for the week of: {results.bestsellers_date}</h2>
    <h3>
      Updates {results.updated} - <em>Last Updated: {results.published_date}</em>
    </h3>
    Grid View || List View
    <ol>
      {results.books.map(book => (
        <BookCard key={book.book_uri} {...book} />
      ))}
    </ol>
  </Layout>
)

async function getServerSideProps({ params }) {
  // runs on client side
  const data = await api(
    `https://api.nytimes.com/svc/books/v3/lists/current/${params.query}.json?api-key=${process.env.NYT_API_KEY}`
  )

  return {
    props: {
      copyright: data?.copyright,
      results: data?.results || [],
    },
  }
}

export { getServerSideProps }
export default Category

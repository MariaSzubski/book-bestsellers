import CategoryCard from "../components/category-card"
import Layout from "../components/layout"

import styles from "../styles/pages/home.module.scss"
import { api } from "../utilities"

const Home = ({ copyright, results }) => {
  const formatDate = date => new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" })
  return (
    <Layout copyright={copyright}>
      <h2>
        <code className={styles.code}>
          Bestsellers for the week of: {formatDate(results.bestsellers_date)}
        </code>
      </h2>
      <h3>
        <em>List Publication Date: {formatDate(results.published_date)}</em>
      </h3>

      <div className={styles.grid}>
        {results.lists.map(c => (
          <CategoryCard content={c} key={c.list_name_encoded} />
        ))}
      </div>
    </Layout>
  )
}

// ---------------------------------- | Data

async function getStaticProps() {
  // runs on server only, at build time
  const data = await api(
    `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.NYT_API_KEY}`
  )
  return {
    props: {
      copyright: data.copyright,
      results: data.results,
    },
  }
}

// ---------------------------------- | Exports

export { getStaticProps }
export default Home

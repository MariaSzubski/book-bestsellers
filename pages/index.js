import Layout from "../components/layout"

import styles from "../styles/pages/home.module.scss"

const Home = () => {
  return (
    <Layout>
      <p className={styles.description}>
        <code className={styles.code}>NYT Books API</code>
      </p>

      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <h2>Category &rarr;</h2>
          <p>Label</p>
        </a>
      </div>
    </Layout>
  )
}

export default Home

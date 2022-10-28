import Footer from "./footer"
import Header from "./header"
import Meta from "./meta"

import styles from "./styles.module.scss"

const Layout = ({ children }) => (
  <>
    <Meta />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  </>
)

export default Layout

import Head from "next/head"
import Image from "next/image"

import styles from "../styles/pages/home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NYT Bestselling Books</title>
        <meta name="description" content="NextJS + NYT Books API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a
            href="https://www.nytimes.com/books/best-sellers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NYT
          </a>
          &nbsp; Bestselling Books
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>NYT Books API</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Category &rarr;</h2>
            <p>Label</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <small>
            Site &copy; 2022{" "}
            <a href="https://mariaszubski.com" target="_blank">
              Maria Szubski Digital, LLC
            </a>
          </small>
        </div>
        <div>
          {" "}
          <small>NYT Data Copyright TO BE ADDED</small>
        </div>
      </footer>
    </div>
  )
}

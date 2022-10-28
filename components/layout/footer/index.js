import styles from "./styles.module.scss"
const Footer = ({ copyright }) => (
  <footer className={styles.footer}>
    <div>
      <small>
        Site &copy; 2022{" "}
        <a href="https://mariaszubski.com" target="_blank" rel="noreferrer">
          Maria Szubski Digital, LLC
        </a>
      </small>
    </div>
    <div>
      <small>Data {copyright}</small>
    </div>
  </footer>
)

export default Footer

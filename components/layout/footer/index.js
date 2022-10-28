import styles from "./styles.module.scss"
const Footer = () => (
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
)

export default Footer

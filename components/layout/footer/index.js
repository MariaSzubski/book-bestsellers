import styles from "./styles.module.scss"
const Footer = ({ copyright }) => (
  <footer className={styles.footer}>
    <div>
      <small>
        Site: Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="https://mariaszubski.com" target="_blank" rel="noreferrer">
          Maria Szubski Digital, LLC
        </a>
      </small>
    </div>
    {copyright && (
      <div>
        <small>
          Data:{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: copyright
                .replace("(c)", "&copy;")
                .replace(
                  "The New York Times Company",
                  '<a href="https://developer.nytimes.com/" target="_blank" rel="nofererrer">The New York Times Company</a>'
                ),
            }}
          />
        </small>
      </div>
    )}
  </footer>
)

export default Footer

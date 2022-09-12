import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./categories-list.module.css"

const CategoriesList = ({ title, articles }) => {
  return (
    <section className={styles.category}>
      <h1>{title}</h1>
      <ul>
        {articles.map(article => (
          <li key={article}>
            <Link to={`${article.path}/`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoriesList

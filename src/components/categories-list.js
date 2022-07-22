import * as React from "react"
import { Link } from "gatsby"

const CategoriesList = ({ title, articles }) => {
  return (
    <section>
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

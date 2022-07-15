import * as React from "react"
import { Link } from "gatsby"

const CategoriesList = ({ title, articles }) => {
  console.log(articles)
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {articles.map(article => (
          <li key={article}>
            <Link>{article}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList

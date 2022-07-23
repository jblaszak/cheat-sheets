import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoriesList from "../components/categories-list"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const categoryData = [
    {
      categoryTitle: "HTML",
      articles: [
        { title: "HTML Basics", path: "/html/basics" },
        { title: "Semantic HTML", path: "/html/semantic-tags" },
        { title: "Essential HTML Tags", path: "/html/essential-tags" },
        { title: "Tables", path: "/html/tables" },
        { title: "Forms", path: "/html/forms" },
        { title: "Accessibility", path: "/html/accessibility" },
      ],
    },
    {
      categoryTitle: "Markdown",
      articles: [{ title: "Markdown", path: "/markdown/markdown" }],
    },
    {
      categoryTitle: "Theory",
      articles: [{ title: "Websites", path: "/theory/websites" }],
    },
  ]

  return (
    <Layout>
      <Seo title="Jo's Developer Cheat Sheet - Home" />
      <header className={styles.textCenter}>
        <h1>Welcome to Jo's Developer Cheat Sheet</h1>
      </header>
      <article>
        {categoryData.map(category => (
          <CategoriesList
            key={category.categoryTitle}
            title={category.categoryTitle}
            articles={category.articles}
          />
        ))}
      </article>
    </Layout>
  )
}

export default IndexPage

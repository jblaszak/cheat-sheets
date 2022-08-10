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
        { title: "Accessibility", path: "/html/accessibility" },
        { title: "Basics", path: "/html/basics" },
        { title: "Essential Tags", path: "/html/essential-tags" },
        { title: "Forms", path: "/html/forms" },
        { title: "Meta Tags", path: "/html/meta-tags" },
        { title: "Semantic HTML", path: "/html/semantic-tags" },
        { title: "Tables", path: "/html/tables" },
      ],
    },
    {
      categoryTitle: "CSS",
      articles: [
        { title: "Animations", path: "/css/animations" },
        { title: "Basics", path: "/css/basics" },
        { title: "Box Model & Sizing", path: "/css/box-model-sizing" },
        {
          title: "Display & Positioning",
          path: "/css/display-positioning",
        },
        { title: "Flexbox", path: "/css/flexbox" },
        { title: "Fonts", path: "/css/fonts" },
        { title: "Grid", path: "/css/grid" },
        { title: "Images", path: "/css/images" },
        { title: "Inheritance", path: "/css/inheritance" },
        { title: "Pseudo Classes & Elements", path: "/css/pseudo" },
        { title: "Responsive Designs", path: "/css/responsive-designs" },
        { title: "Selectors", path: "/css/selectors" },
        {
          title: "Units, Colors & Gradients",
          path: "/css/units-colors-gradients",
        },
      ],
    },
    {
      categoryTitle: "Javascript",
      articles: [
        { title: "Basics", path: "/javascript/basics" },
        { title: "Arrays", path: "/javascript/arrays" },
        { title: "Numbers & Math", path: "/javascript/numbers" },
        { title: "Objects", path: "/javascript/objects" },
        { title: "Strings", path: "/javascript/strings" },
        { title: "Symbols", path: "/javascript/symbols" },
      ],
    },
    {
      categoryTitle: "Markdown",
      articles: [{ title: "Markdown", path: "/markdown/markdown" }],
    },
    {
      categoryTitle: "Theory",
      articles: [
        { title: "Programming", path: "/theory/programming" },
        { title: "Websites", path: "/theory/websites" },
      ],
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

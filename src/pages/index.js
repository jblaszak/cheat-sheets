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
        { title: "Arrays", path: "/javascript/arrays" },
        { title: "Basics", path: "/javascript/basics" },
        { title: "Browser Storage", path: "/javascript/browser-storage" },
        { title: "Classes", path: "/javascript/classes" },
        { title: "Closures", path: "/javascript/closures" },
        { title: "Currying", path: "/javascript/currying" },
        { title: "Data Structures", path: "/javascript/datastructures" },
        { title: "DOM Manipulation", path: "/javascript/dom-manipulation" },
        { title: "Events", path: "/javascript/events" },
        { title: "Event Loop", path: "/javascript/event-loop" },
        { title: "Generators", path: "/javascript/generators" },
        { title: "Modules", path: "/javascript/modules" },
        { title: "Modern Javascript", path: "/javascript/modern" },
        { title: "Numbers & Math", path: "/javascript/numbers" },
        { title: "Objects", path: "/javascript/objects" },
        { title: "Promises & Async/Await", path: "/javascript/promises-async" },
        { title: "Requests", path: "/javascript/requests" },
        { title: "Strings", path: "/javascript/strings" },
        { title: "Symbols", path: "/javascript/symbols" },
        { title: "Time & Timers", path: "/javascript/time" },
        { title: "This", path: "/javascript/this" },
        { title: "Web Workers", path: "/javascript/web-workers" },
      ],
    },
    {
      categoryTitle: "TypeScript",
      articles: [{ title: "TypeScript", path: "/typescript/typescript" }],
    },
    {
      categoryTitle: "Data Structures & Algorithms",
      articles: [
        {
          title: "Basic Concepts",
          path: "/data-structures-algorithms/basic-concepts",
        },
        {
          title: "Arrays",
          path: "/data-structures-algorithms/arrays",
        },
        {
          title: "Linked Lists",
          path: "/data-structures-algorithms/linked-lists",
        },
        {
          title: "Hash Tables",
          path: "/data-structures-algorithms/hash-tables",
        },
      ],
    },
    {
      categoryTitle: "Git",
      articles: [{ title: "Git", path: "/git/git" }],
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

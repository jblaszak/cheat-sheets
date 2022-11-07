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
        { title: "Accessibility", path: "/css/accessibility" },
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
        { title: "Shadows", path: "/css/shadows" },
        {
          title: "Units, Colors & Gradients",
          path: "/css/units-colors-gradients",
        },
        {
          title: "Variables",
          path: "/css/variables",
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
      categoryTitle: "React",
      articles: [
        { title: "Basics", path: "/react/basics" },
        {
          title: "Class-Based Components",
          path: "/react/class-based-components",
        },
        { title: "Component Lifecycle", path: "/react/component-lifecycle" },
        { title: "Component Lists", path: "/react/component-lists" },
        { title: "Context", path: "/react/context" },
        { title: "Custom Hooks", path: "/react/custom-hooks" },
        { title: "Debugging", path: "/react/debugging" },
        { title: "Events", path: "/react/events" },
        { title: "Error Handling", path: "/react/error-handling" },
        { title: "Imperative React", path: "/react/imperative" },
        { title: "Performance", path: "/react/performance" },
        { title: "Portals", path: "/react/portals" },
        { title: "Refs", path: "/react/refs" },
        { title: "State", path: "/react/state" },
      ],
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
        {
          title: "Stacks & Queues",
          path: "/data-structures-algorithms/stacks-queues",
        },
        {
          title: "Strings",
          path: "/data-structures-algorithms/strings",
        },
        {
          title: "Graphs",
          path: "/data-structures-algorithms/graphs",
        },
        {
          title: "Trees",
          path: "/data-structures-algorithms/trees",
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
      categoryTitle: "Systems Design",
      articles: [
        { title: "Security", path: "/systems-design/security" },
        { title: "Storage", path: "/systems-design/storage" },
        { title: "Systems Design", path: "/systems-design/systems-design" },
      ],
    },
    {
      categoryTitle: "Theory",
      articles: [
        { title: "APIs", path: "/theory/apis" },
        { title: "Programming", path: "/theory/programming" },
        { title: "Websites", path: "/theory/websites" },
      ],
    },
  ]

  return (
    <Layout>
      <Seo title="Jo's Developer Cheat Sheet - Home" />
      <header className={styles.header}>
        <h1>Welcome to Jo's Developer Cheat Sheet</h1>
      </header>
      <article className={styles.mainArticle}>
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

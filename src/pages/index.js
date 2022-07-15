import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoriesList from "../components/categories-list"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const categories = {}
  for (let node of data.allFile.nodes) {
    console.log("node", node)
    if (categories[node.relativeDirectory]) {
      categories[node.relativeDirectory].push(node.name)
    } else {
      categories[node.relativeDirectory] = [node.name]
    }
  }
  console.log("categories:", categories)

  return (
    <Layout>
      <Seo title="Jo's Developer Cheat Sheet - Home" />
      <div className={styles.textCenter}>
        <h1>Welcome to Jo's Developer Cheat Sheet</h1>
      </div>
      <div>
        {Object.keys(categories).map(key => (
          <CategoriesList key={key} title={key} articles={categories[key]} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
        relativeDirectory
      }
    }
  }
`

export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoriesList from "../components/categories-list"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const categories = {}
  for (let node of data.allMdx.nodes) {
    if (categories[node.frontmatter.category]) {
      categories[node.frontmatter.category].push({
        title: node.frontmatter.title,
        slug: node.slug,
      })
    } else {
      categories[node.frontmatter.category] = [
        { title: node.frontmatter.title, slug: node.slug },
      ]
    }
  }

  console.log(categories)

  return (
    <Layout>
      <Seo title="Jo's Developer Cheat Sheet - Home" />
      <div className={styles.textCenter}>
        <h1>Welcome to Jo's Developer Cheat Sheet</h1>
      </div>
      <div>
        {Object.keys(categories).map(node => (
          <CategoriesList key={node} title={node} articles={categories[node]} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___categoryOrder, order: ASC }) {
      nodes {
        frontmatter {
          title
          category
          categoryOrder
          articleOrder
        }
        id
        slug
      }
    }
  }
`

export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as styles from "../components/index.module.css"

const Article = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={`Jo's Developer Cheat Sheet - ${data.mdx.frontmatter.title}`}
      />
      <div className={styles.textCenter}>
        <h1>{data.mdx.frontmatter.title}</h1>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Article

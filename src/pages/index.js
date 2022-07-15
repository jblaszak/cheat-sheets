import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Jo's Developer Cheat Sheet - Home" />
    <div className={styles.textCenter}>
      <h1>Welcome to Jo's Developer Cheat Sheet</h1>
    </div>
    <div></div>
  </Layout>
)

export default IndexPage

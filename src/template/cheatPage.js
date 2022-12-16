import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cheat from "../components/cheat"
import * as styles from "./cheatPage.module.css"

// import * as styles from "../../components/index.module.css"

const Template = ({ pageData }) => {
  const location = useLocation()
  const path = location.pathname.substring(13) // will break local, but needed for github pages hosting given repository name of "cheat-sheets/"

  // Create table of contents
  let inSubList = false
  let tableOfContents = []
  let subList = []

  for (let i = 0; i < pageData.cheats.length; i++) {
    for (let j = 0; j < pageData.cheats[i].length; j++) {
      const h2 = pageData.cheats[i][j]?.["h2"]
      const h3 = pageData.cheats[i][j]?.["h3"]

      if (h2 !== undefined) {
        if (inSubList) {
          tableOfContents.push(<ul key={`${h2}-sublist`}>{subList}</ul>)
          subList = []
          inSubList = false
        }
        tableOfContents.push(
          <li key={h2}>
            <Link to={`${path}#${h2}`}>{h2}</Link>
          </li>
        )
      } else if (h3 !== undefined) {
        subList.push(
          <li key={h3}>
            <Link to={`${path}#${h3}`}>{h3}</Link>
          </li>
        )
        inSubList = true
      }
    }
  }

  if (subList.length > 0) {
    tableOfContents.push(<ul key="last-sublist">{subList}</ul>)
  }

  return (
    <Layout>
      <Seo title={`Jo's Developer Cheat Sheet - ${pageData.pageTitle}`} />
      <article>
        <header>
          <h1>{pageData.pageTitle}</h1>
          {pageData.pageInfo ? <p>{pageData.pageInfo}</p> : null}
        </header>
        <section className={styles.tableOfContents}>
          <h2>Table Of Contents</h2>
          <ul>{tableOfContents}</ul>
        </section>
        {/* Individual Cheats */}
        {pageData.cheats.map(cheatItems => {
          const firstKey = Object.keys(cheatItems[0])[0]
          return <Cheat key={cheatItems[0][firstKey]} items={cheatItems} />
        })}
      </article>
    </Layout>
  )
}

export default Template

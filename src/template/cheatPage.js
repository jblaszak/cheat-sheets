import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cheat from "../components/cheat"

// import * as styles from "../../components/index.module.css"

const Template = ({ pageData }) => {
  return (
    <Layout>
      <Seo title={`Jo's Developer Cheat Sheet - ${pageData.pageTitle}`} />
      <article>
        <header>
          <h1>{pageData.pageTitle}</h1>
          {pageData.pageInfo ? <p>{pageData.pageInfo}</p> : null}
        </header>
        {pageData.cheats.map(cheat => (
          <section>
            <Cheat title={cheat.title} items={cheat.items} />
          </section>
        ))}
      </article>
    </Layout>
  )
}

export default Template

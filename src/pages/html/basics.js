import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Cheat from "../../components/cheat"
import * as styles from "../../components/index.module.css"

const HTMLBasicsPage = () => {
  const pageTitle = "HTML Basics"
  const cheats = [
    {
      title: "Declare HTML Version",
      items: [
        {
          type: "text",
          data: "Tell the browser which HTML version to use, defaults to latest version. Useful for older browsers.",
        },
        {
          type: "code",
          language: "html",
          data: `<!DOCTYPE html>`,
        },
      ],
    },
    {
      title: "Tags",
      items: [
        {
          type: "text",
          data: "HTML is structured by wrapping content with tags corresponding to that element.",
        },
        {
          type: "code",
          language: "html",
          data: `<tagname>Content</tagname>`,
        },
      ],
    },
    {
      title: "Tags",
      items: [
        {
          type: "text",
          data: "HTML is structured by wrapping content with tags corresponding to that element.",
        },
        {
          type: "code",
          language: "html",
          data: `<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        Page Content
    </body>
</html>`,
        },
      ],
    },
  ]

  return (
    <Layout>
      <Seo title={`Jo's Developer Cheat Sheet - ${pageTitle}`} />
      <article>
        <header>
          <h1>{pageTitle}</h1>
        </header>
        <section>
          {cheats.map(cheat => (
            <Cheat title={cheat.title} items={cheat.items} />
          ))}
        </section>
      </article>
    </Layout>
  )
}

export default HTMLBasicsPage

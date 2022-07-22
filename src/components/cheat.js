import React from "react"
import Code from "../components/code"

const Cheat = ({ title, items }) => {
  return (
    <section>
      <h1>{title}</h1>
      {items.map(item => {
        if (item.type === "text") return <p>{item.data}</p>
        return <Code language={item.language}>{item.data}</Code>
      })}
    </section>
  )
}

export default Cheat

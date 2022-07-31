import React from "react"
import Code from "../components/code"

const Cheat = ({ items }) => {
  const itemTypes = [
    {
      itemType: /^h1$/,
      element: data => (
        <h1 id={data} key={data}>
          {data}
        </h1>
      ),
    },
    {
      itemType: /^h2$/,
      element: data => (
        <h2 id={data} key={data}>
          {data}
        </h2>
      ),
    },
    {
      itemType: /^h3$/,
      element: data => (
        <h3 id={data} key={data}>
          {data}
        </h3>
      ),
    },
    {
      itemType: /^p$/,
      element: data => <p key={data.slice(0, 32)}>{data}</p>,
    },
    {
      itemType: /^code$/,
      element: data => (
        <Code language={data.language} key={data.code.slice(0, 64)}>
          {data.code}
        </Code>
      ),
    },
    {
      itemType: /^link$/,
      element: data => (
        <a href={data} key={data}>
          {data}
        </a>
      ),
    },
    {
      itemType: /^definitionList$/,
      element: data => {
        return (
          <ul>
            {data.map(item => {
              return (
                <li key={item.title}>
                  <strong>{item.title}</strong> - {item.definition}
                </li>
              )
            })}
          </ul>
        )
      },
    },
    {
      itemType: /^(.*)$/,
      element: () => <p>CHEAT TYPE NOT RECOGNIZED! CHECK DATA!</p>,
    },
  ]

  return (
    <section>
      {items.map(item => {
        const itemIdentifier = Object.keys(item)[0]
        // Find element matching regex test
        const { itemType, element } = itemTypes.find(
          ({ itemType, element }) => {
            return itemType.test(itemIdentifier)
          }
        )
        // Return element on matched regex test earlier, pass through the item data for the matching regex execution
        return element(item[itemType.exec(itemIdentifier)])
      })}
    </section>
  )
}

export default Cheat

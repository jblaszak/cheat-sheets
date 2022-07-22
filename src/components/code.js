import React, { useEffect } from "react"
import Prism from "prismjs"

const Code = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}

export default Code

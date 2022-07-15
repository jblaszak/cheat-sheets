import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

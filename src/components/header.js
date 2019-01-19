import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div
    style={{
      background: `#999584`,
      marginBottom: `1.45rem`,
      padding: `1.45rem 1.0875rem`,
      display: 'flex',
      flexDirection: 'row',
    }}
  >
      <h1
        style={{ margin: 0, maxWidth: 960, }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          FCP
        </Link>
      </h1>
      <div style={{
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}>
      <h3
      style={{ margin: 0, maxWidth: 960, }}
      >
        <Link
          to="/contact-us/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact Us
        </Link>
      </h3>
      <h3
      style={{ margin: 0, maxWidth: 960, }}
      >
        <Link
          to="/about-us/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About Us
        </Link>
      </h3>
      <h3
      style={{ margin: 0, maxWidth: 960, }}
      >
        <Link
          to="/what-we-do/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          What We Do
        </Link>
      </h3>
      <h3
      style={{ margin: 0, maxWidth: 960, }}
      >
        <Link
          to="/client-list/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Client List
        </Link>
      </h3>
  </div>
  </div>
)

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header

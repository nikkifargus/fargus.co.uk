import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
  <Header/>
  <div
    style={{
      textAlign: 'center',
      paddingLeft: `1rem`,
      paddingRight: `1rem`,
      flex: 1,
    }}
  >
    {children}
  </div>
    <footer>
      <p style={{fontSize: 13, marginBottom: 0, textAlign: 'center', color: `#565347`}}> Our standards are based on those specified by the <a href="https://www.cipd.co.uk/">Chartered Institute of Personnel & Development</a>, the <a href="http://www.bps.org.uk/">British Psychological Society</a>, and the <a href="http://www.ibconsulting.org.uk/">Institute of Business Consulting</a>.</p>
    </footer>

  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

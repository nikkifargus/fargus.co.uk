import PropTypes from 'prop-types'
import React from 'react'

const FCPText = ({children, style}) => {
  console.log('style', style);
  return (
  <p
    style={{ color: `#565347` }}
  >
    {children}
  </p>
)}

FCPText.propTypes = {
  siteTitle: PropTypes.string,
}

FCPText.defaultProps = {
  siteTitle: ``,
}

export default FCPText

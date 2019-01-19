import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="Client List" />
    <h1>CLIENT LIST</h1>
    <p>Welcome to page 5</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

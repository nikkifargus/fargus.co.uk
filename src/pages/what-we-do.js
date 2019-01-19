import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="What We Do" />
    <h1>WHAT WE DO</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

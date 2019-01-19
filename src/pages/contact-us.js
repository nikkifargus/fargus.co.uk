import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <FCPText>
      peter@fargus.co.uk | dee@fargus.co.uk
    </FCPText>
    <FCPText>
      <a style={{ color: `#565347` }} href="https://www.linkedin.com/in/pfargus/">Peter Fargus</a> | <a style={{ color: `#565347` }} href="https://www.linkedin.com/in/dee-fargus-20382b12/">Dee Fargus</a>
    </FCPText>
    <FCPText>
      01423 566035
    </FCPText>
  </Layout>
)

export default SecondPage

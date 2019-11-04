/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="lg">
        <Typography
          component="main"
          style={{ height: '100vh', marginTop: '7em' }}
        >
          {children}
        </Typography>
      </Container>
    </>
  )
}

export default Layout

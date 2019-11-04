import React from 'react'
import { Button } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import MaterialLink from '@material-ui/core/Link'

const styles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8em',
    },
  },
  subtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
    },
  },
  paper: {
    padding: '1em',
    fontWeight: '300',
  },
  getStartedButtonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const IndexPage = () => {
  const classes = styles()

  return (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={10}>
          <Typography
            variant="h2"
            align="center"
            paragraph
            className={classes.title}
            color="primary"
          >
            Rick N Morty Browser
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            className={classes.subtitle}
          >
            A{' '}
            <MaterialLink href="https://www.gatsbyjs.org/">Gatsby</MaterialLink>{' '}
            Project Powered By{' '}
            <MaterialLink href="https://rickandmortyapi.com/">
              Rick And Morty API
            </MaterialLink>
          </Typography>

          <ButtonGroup
            className={classes.getStartedButtonGroup}
            size="large"
            color="primary"
            variant="text"
          >
            <Button to="/characters">Characters</Button>
            <Button to="/episodes">Episodes</Button>
          </ButtonGroup>
        </Paper>
      </Container>
    </Layout>
  )
}

export default IndexPage

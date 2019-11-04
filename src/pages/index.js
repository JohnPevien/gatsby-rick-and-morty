import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
    button: {
      fonSize: '3em',
    },
  },
}))

const IndexPage = () => {
  const classes = styles()

  return (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography
            variant="h2"
            align="center"
            paragraph
            className={classes.title}
          >
            Rick N Morty Browser
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            className={classes.subtitle}
          >
            A gatsby project powered by rick and morty API
          </Typography>

          <Typography
            variant="h6"
            align="center"
            paragraph
            className={classes.subtitle}
          >
            Get started:
          </Typography>

          <div
            className={classes.getStartedButtonGroup}
          >
            <Link to="/characters">
              <Button color="primary">Characters</Button>
            </Link>
            <Link to="/episodes">
              <Button color="primary">Episodes</Button>
            </Link>
          </div>
        </Paper>
      </Container>
    </Layout>
  )
}

export default IndexPage

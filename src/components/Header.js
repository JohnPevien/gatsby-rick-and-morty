import React from 'react'
import { Link } from 'gatsby-theme-material-ui'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fff',
  },
  siteTitle: {
    flexGrow: 0.9,
    [theme.breakpoints.down('md')]: {
      flexGrow: 0.95,
    },
  },
}))

const Header = () => {
  const classes = styles()

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Box className={classes.siteTitle}>
            <Typography variant="h6" className={classes.title}>
              <Link
                to="/"
                className={classes.navLink}
                underline="none"
                variant="h5"
              >
                Rick N Morty
              </Link>
            </Typography>
          </Box>

          <Link to="/characters/1" className={classes.navLink}>
            <Typography className={classes.title} variant="subtitle1" noWrap>
              Characters
            </Typography>
          </Link>
          {/* <Link to="/episodes" className={classes.titleLink}>
              <Hidden only={['xl', 'lg', 'md', 'sm']}>
                <LibraryBooksOutlinedIcon />
              </Hidden>

              <Hidden only={['xs']}>
                <Typography
                  className={classes.title}
                  variant="subtitle1"
                  noWrap
                >
                  Episodes
                </Typography>
              </Hidden>
            </Link> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header

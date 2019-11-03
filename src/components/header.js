import React from 'react'
import { Link } from 'gatsby'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
  titleLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navDiv: {
    display: 'flex',
    flexGrow: 0.1,
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexGrow: 0.3,
    },
  },
}))

const Header = () => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.titleLink}>
              Rick N Morty
            </Link>
          </Typography>
          <div className={classes.navDiv}>
            <Link to="/characters" className={classes.titleLink}>
              <Hidden only={['xl', 'lg', 'md', 'sm']}>
                <FaceOutlinedIcon />
              </Hidden>

              <Hidden only={['xs']}>
                <Typography
                  className={classes.title}
                  variant="subtitle1"
                  noWrap
                >
                  Characters
                </Typography>
              </Hidden>
            </Link>
            <Link to="/episodes" className={classes.titleLink}>
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
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

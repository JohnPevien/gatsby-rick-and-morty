import React from 'react'
import { Link } from 'gatsby'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navDiv: {
    display: 'flex',
    flexGrow: 0.2,
  },
}))

const Header = () => {
  const classes = useStyles()

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
            <Typography className={classes.title} variant="subtitle1" noWrap>
              <Link to="/About" className={classes.titleLink}>
                About
              </Link>
            </Typography>
            <Typography className={classes.title} variant="subtitle1" noWrap>
              <Link to="/Characters" className={classes.titleLink}>
                Characters
              </Link>
            </Typography>
            <Typography className={classes.title} variant="subtitle1" noWrap>
              <Link to="/About" className={classes.titleLink}>
                Episodes
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

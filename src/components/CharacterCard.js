import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import WcOutlinedIcon from '@material-ui/icons/WcOutlined'
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined'

const styles = makeStyles({
  card: {
    maxWidth: 375,
    width: '100%',
  },
  media: {
    height: 270,
  },
})

const CharacterCard = ({
  data: { name, image, status, species, gender, origin },
}) => {
  const classes = styles()
  return (
    <Card className={classes.card} raised>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {name}
        </Typography>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FavoriteBorderOutlinedIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Status" secondary={status} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonOutlineOutlinedIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Species" secondary={species} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WcOutlinedIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gender" secondary={gender} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PublicOutlinedIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Origin" secondary={origin.name} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CharacterCard

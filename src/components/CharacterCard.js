import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = makeStyles({
  card: {
    maxWidth: 375,
    width: '100%',
  },
  media: {
    height: 270,
  },
})

const characterCard = ({ imgUrl, name }) => {
  const classes = styles()

  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default characterCard

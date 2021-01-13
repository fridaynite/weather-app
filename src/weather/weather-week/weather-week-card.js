import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles({
  weatherCard: {
    width: '150px',
    marginLeft: '5px',
    marginRight: '5px',
    flexShrink: 0,
    backgroundColor: 'rgba(0, 82, 165, 0.2)'
  },

  media: {
    height: '50px',
    width: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  weatherInfo: {
    textAlign: 'center',
    color: 'rgb(255, 255, 255)'
  }
})


function WeatherWeekCard(props) {
  const classes = useStyles()

  return(
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.weatherCard}>
          <CardContent className={classes.weatherInfo}>
            <Typography gutterBottom variant="h6" component="p">
              {props.date}         
            </Typography>
            <Typography variant="h6" component="p">
              {props.time} 
            </Typography>
            <CardMedia
            className={classes.media}
            image={props.icon}
            title="Weather icon"
            />
            <Typography gutterBottom variant="h5" component="p">
              {props.temp}°
            </Typography>
          </CardContent>
      </Card>
    </Slide>
  )
}

const mstp = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mstp, null)(WeatherWeekCard)

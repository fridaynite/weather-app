import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'

import moment from 'moment'
import { iconUrl } from '../config/config'


const useStyles = makeStyles({
  firstCard: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5px',
    backgroundColor: 'rgba(0, 82, 165, 0.2)',
    color: 'rgb(255, 255, 255)'
  },

  actionArea:{
    display: 'flex',
    justifyContent: 'space-between',
  },

  media: {
    height: '100px',
    width: '100px',
    marginLeft: '7px'
  },

  cardContent: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  secondCard: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(0, 82, 165, 0.2)',
    color: 'rgb(255, 255, 255)'
  },

  secondCardContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  secondCardContentInfo: {
    fontSize: '17px',
    lineHeight: 'normal',
    width: '70px',
    display: 'block',
    paddingLeft: '10px',
    paddingRight: '15px',
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
  },

  spinner: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'rgb(255, 255, 255)'   
  },

  alert: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto'
  } 
});

function WeatherCard(props) {
  const classes = useStyles()

  if (props.weather.loading || props.weather.loadingWeek) {
    return <CircularProgress className={classes.spinner}/>
  }

  if (props.weather.error) {
    return  <Slide 
                in={true}
                direction="up" mountOnEnter unmountOnExit
                style={{ transformOrigin: '0 0 0' }}
                {...(props.weather.error ? { timeout: 2000 } : {})}
            >
              <Alert className={classes.alert} variant="outlined" severity="error">
                City not found, try again
              </Alert>
            </Slide>
  }

  return props.weather.loaded && (  
    <React.Fragment>
      <Slide 
      in={true} 
      direction="right" mountOnEnter unmountOnExit
      style={{ transformOrigin: '0 0 0' }}
      {...(props.weather.loaded ? { timeout: 1500 } : {})}
      >
        <Card className={classes.firstCard}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              className={classes.media}
              image={`${iconUrl}/${props.weather.data.weather[0].icon}@2x.png`}
              title="Weather icon"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.weather.data.name}, {props.weather.data.sys.country}
              </Typography>
              <Typography variant="h6" component="p">
                {moment().format('dddd MMMM Do')}
              </Typography>
              <Typography variant="h6" component="p">
                {props.weather.data.main.temp}°
              </Typography>
              <Typography variant="h6" component="p">
                {props.weather.data.weather[0].description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
      
      <Slide
        in={true} 
        direction="left" mountOnEnter unmountOnExit
        style={{ transformOrigin: '0 0 0' }}
        {...(props.weather.loaded ? { timeout: 1500 } : {})}
      >
      <Card className={classes.secondCard}>
        <CardContent className={classes.secondCardContent}>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p">
            {props.weather.data.main.temp_max}°
            <br />
            Max
          </Typography>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p"> 
            {props.weather.data.wind.speed} m/s
            <br />
            Wind
          </Typography>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p">
            {moment.unix(props.weather.data.sys.sunrise).format('HH:mm')}
            <br />
            Sunrise
          </Typography>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p">
            {props.weather.data.main.temp_min}°
            <br />
            Min
          </Typography>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p">
            {props.weather.data.main.humidity}%
            <br />
            Humidity
          </Typography>
          <Typography className={classes.secondCardContentInfo} variant="h6" component="p">
            {moment.unix(props.weather.data.sys.sunset).format('HH:mm')}
            <br />
            Sunset
          </Typography>
        </CardContent>
      </Card>
      </Slide>
    </React.Fragment>
  )
}

const mstp = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mstp, null)(WeatherCard)

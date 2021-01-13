import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import SearchField from './search/search-field'
import WeatherCard from './weather/weather-card'
import WeatherWeeekCardList from './weather/weather-week/weather-week-card-list'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  background: {
    minHeight: '100vh',
    backgroundImage: "url('https://wallpapercave.com/wp/wp7427407.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom: '50px'
  },  

  headline: {
    fontSize: '100px',
    lineHeight: 'normal',
    color: 'rgb(255, 255, 255)',
    marginTop: '0px',
    marginBottom: '0px',
    paddingTop: '60px'
  },

  weatherWrapper: {
    display: 'flex',
    overflow: 'auto',
    marginTop: '70px',
    paddingBottom: '20px'
  }
  }
))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <Container maxWidth="lg">
        <h1 className={classes.headline}>Weather app</h1>
        <SearchField />
        <WeatherCard />
      </Container>
      
      <div className={classes.weatherWrapper}>
        <WeatherWeeekCardList className={classes.cardList}/>
      </div>
    </div>
  )
}

export default App

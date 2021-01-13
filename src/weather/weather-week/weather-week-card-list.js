import React from 'react'
import { connect } from 'react-redux'

import WeatherWeekCard from './weather-week-card'

import moment from 'moment'

import { iconUrl } from '../../config/config'

function WeatherWeekCardList(props) {
  return(
    props.weather.loadedWeek && props.weather.dataWeek.list.map((item) => {
      return <WeatherWeekCard
                key={item.dt_txt}
                temp={item.main.temp}
                date={moment.unix(item.dt).format('MMMM Do')}
                time={moment.unix(item.dt).format('HH:mm')}
                icon={`${iconUrl}/${item.weather[0].icon}@2x.png`} 
              />
    })
  )
}

const mstp = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mstp, null)(WeatherWeekCardList)
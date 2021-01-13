import axios from 'axios'

import { apiUrl, apiKey } from '../config/config'

export const SEARCH_WEATHER_REQUEST = 'SEARCH_WEATHER_REQUEST'
export const SEARCH_WEATHER_SUCCESS = 'SEARCH_WEATHER_SUCCESS'
export const SEARCH_WEATHER_ERROR = 'SEARCH_WEATHER_ERROR'

export const SEARCH_WEATHER_WEEK_REQUEST = 'SEARCH_WEATHER_WEEK_REQUEST'
export const SEARCH_WEATHER_WEEK_SUCCESS = 'SEARCH_WEATHER_WEEK_SUCCESS'
export const SEARCH_WEATHER_WEEK_ERROR = 'SEARCH_WEATHER_WEEK_ERROR'

function searchWeatherRequest() {
  return {
    type: SEARCH_WEATHER_REQUEST
  }
}

function searchWeatherSuccess(data) {
  return {
    type: SEARCH_WEATHER_SUCCESS,
    payload: data
  }
}

function searchWeatherError(message) {
  return {
    type: SEARCH_WEATHER_ERROR,
    payload: message
  }
}

function searchWeatherWeekRequest() {
  return {
    type: SEARCH_WEATHER_WEEK_REQUEST
  }
}

function searchWeatherWeekSuccess(data) {
  return {
    type: SEARCH_WEATHER_WEEK_SUCCESS,
    payload: data
  }
}

function searchWeatherWeekError(message) {
  return {
    type: SEARCH_WEATHER_WEEK_ERROR,
    payload: message
  }
}

export const getSearchWeather = (query) => (dispatch) => {
  const request = searchWeatherRequest()
  dispatch(request)

  const url = `${apiUrl}/weather?q=${query}&appid=${apiKey}&units=metric`
  axios.get(url)
    .then((response) => {
      const success = searchWeatherSuccess(response.data)
      dispatch(success)
    })
    .catch((err) => {
      const error = searchWeatherError(err.message)
      dispatch(error)
    })
}

export const getSearchWeatherWeek = (query) => (dispatch) => {
  const request = searchWeatherWeekRequest()
  dispatch(request)

  const url = `${apiUrl}/forecast?q=${query}&appid=${apiKey}&units=metric`
  axios.get(url)
    .then((response) => {
      const success = searchWeatherWeekSuccess(response.data)
      dispatch(success)
    })
    .catch((err) => {
      const error = searchWeatherWeekError(err.message)
      dispatch(error)
    })
}
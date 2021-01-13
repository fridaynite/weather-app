import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import { getSearchWeather, getSearchWeatherWeek } from './actions'

const styles = {
  searchForm: {
      marginTop: '50px',
      marginBottom: '70px'
    },

    searchField: {
      '& label.Mui-focused': {
        color: 'rgb(255, 255, 255)',
      },
      '& label': {
        color: 'rgb(255, 255, 255)',
      },
      '& input': {
        color: 'rgb(255, 255, 255)'
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(104, 149, 197)',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(104, 149, 197, 0.5)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(255, 255, 255)',
        },
      }
    }   
  }
  
  
class SearchField extends Component {
  state = {
    query: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { query } = this.state

    if(query) {
      this.props.getSearchWeather(query)
      this.props.getSearchWeatherWeek(query)

      this.setState({ query: '' })
    }
  }

  handleChange = (event) => {
    const query = event.target.value

    this.setState({ query })
  }

  render() {
    const { classes } = this.props

    return(
      <form onSubmit={this.handleSubmit} className={classes.searchForm} noValidate autoComplete="off">
        <TextField onChange={this.handleChange} className={classes.searchField} value={this.state.query} id="outlined-basic" label="Enter city" variant="outlined" fullWidth />
      </form>
    )
  }
}

const mdtp = (dispatch) => {
  return {
    getSearchWeather: (query) => {
      dispatch(getSearchWeather(query))
    },

    getSearchWeatherWeek: (query) => {
      dispatch(getSearchWeatherWeek(query))
    }
  }
}

export default compose(
  withStyles(styles), 
  connect(null, mdtp)
)(SearchField)
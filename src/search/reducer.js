import { 
  SEARCH_WEATHER_REQUEST,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_ERROR,
  SEARCH_WEATHER_WEEK_REQUEST,
  SEARCH_WEATHER_WEEK_SUCCESS,
  SEARCH_WEATHER_WEEK_ERROR
} from './actions'

const initialState = {
  loading: false,
  loaded: false,
  error: '',
  data: {},
  
  loadingWeek: false,
  loadedWeek: false,
  errorWeek: '',
  dataWeek: {}
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_WEATHER_REQUEST:
      return {...state, loading: true, loaded: false, error: ''}

    case SEARCH_WEATHER_SUCCESS:
      return {...state, loading: false, loaded: true, error: '', data: action.payload}

    case SEARCH_WEATHER_ERROR:
      return {...state, loading: false, loaded: false, error: action.payload}


    case SEARCH_WEATHER_WEEK_REQUEST:
      return {...state, loadingWeek: true, loadedWeek: false, errorWeek: ''}

    case SEARCH_WEATHER_WEEK_SUCCESS:
      return {...state, loadingWeek: false, loadedWeek: true, errorWeek: '', dataWeek: action.payload}

    case SEARCH_WEATHER_WEEK_ERROR:
      return {...state, loadingWeek: false, loadedWeek: false, errorWeek: action.payload}

    default:
      return state
  }
}
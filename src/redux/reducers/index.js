import { combineReducers } from 'redux'
import appConfigReducer from './app-config-reducer'

export default combineReducers({ appConfig: appConfigReducer })

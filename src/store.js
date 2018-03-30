import { createStore, combineReducers } from 'redux'
import userReducer from './ducks/userReducer'
import houseReducer from './ducks/houseReducer'

export default createStore( combineReducers( {userReducer, houseReducer} ) )
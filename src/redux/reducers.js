import { combineReducers } from 'redux'
import auth from './auth/reducers'
import project from './project/reducers'

export default combineReducers({
    auth,
    project
})
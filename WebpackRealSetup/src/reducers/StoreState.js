import {combineReducers} from 'redux';
import Users from './user_reducers';
const rootReducers=combineReducers({
    users:Users
})
export default rootReducers
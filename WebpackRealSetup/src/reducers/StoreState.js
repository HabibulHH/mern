import {combineReducers} from 'redux';
import Users from './user_reducers';
import UsersReducers from './load_user_reducers';
import select from './select_reducers';
const rootReducers=combineReducers({
    users:Users,
    loadded:UsersReducers,
    select:select  
})
export default rootReducers
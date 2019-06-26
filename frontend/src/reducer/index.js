import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import quote from './quote';
import history from './history'
export default combineReducers({
    alert,
    auth,
    profile,
    quote,
    history
});
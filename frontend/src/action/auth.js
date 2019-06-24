import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOGGEDIN, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types';
import { setAlert } from './alert';
import  setAuthToken  from '../utils/setAuthToken'

//Logged In user
export const loggedUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOGGEDIN,
            payload: res.data
        })
    } catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
}


//Sign Up
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loggedUser());
    } catch(err){
        const errors = err.response.data.errors;
        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}
//log in
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loggedUser());
    } catch(err){
        const errors = err.response.data.errors;
        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

//LOG OUT
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE})
    dispatch({type: LOGOUT})
}
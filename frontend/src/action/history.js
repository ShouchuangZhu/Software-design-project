import axios from 'axios';

import { GET_HISTORY, HISTORY_ERROR} from './types'

//Get current users history
export const getHistory = () => async dispatch => {
    try {
        const res = await axios.get('/api/quote');
        dispatch({
            type: GET_HISTORY,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: HISTORY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}
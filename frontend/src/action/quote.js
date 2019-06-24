import axios from 'axios';
import { setAlert } from './alert';
import { GET_QUOTE, QUOTE_ERROR} from './types'

//Create quote

export const createQuote = (formData) =>  async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/quote', formData, config);

        dispatch({
            type: GET_QUOTE,
            payload: res.data
        });
        dispatch(setAlert('Quote Created'));
    } catch (err){
        const errors = err.response.data.errors;
        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: QUOTE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
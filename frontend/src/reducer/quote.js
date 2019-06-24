import { GET_QUOTE, QUOTE_ERROR, CLEAR_QUOTE } from "../action/types";

const initialState = {
    quote: null,
    quotes: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_QUOTE:
            return {
                ...state,
                quote: payload,
                loading: false
            }
        case QUOTE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_QUOTE:
            return {
                ...state,
                quote: null,
                loading: false,
            }
        default:
            return state;

    }
}
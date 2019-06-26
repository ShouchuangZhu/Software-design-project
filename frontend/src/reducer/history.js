import { GET_HISTORY, HISTORY_ERROR, } from "../action/types";

const initialState = {
    history: null,
    histories: [],
    loading: false,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_HISTORY:
            return {
                ...state,
                history: payload,
                loading: true
            }
        case HISTORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: true
            }
       
        default:
            return state;

    }
}


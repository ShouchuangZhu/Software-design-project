import { GET_HISTORY, HISTORY_ERROR, } from "../action/types";

const initialState = {
    history: null,
    histories: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_HISTORY:
            return {
                ...state,
                history: payload,
                loading: false
            }
        case HISTORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
       
        default:
            return state;

    }
}


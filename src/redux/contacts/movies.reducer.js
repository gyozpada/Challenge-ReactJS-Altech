import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE
} from "./movies.actionTypes";

export const MOVIE_FEATURE_KEY = 'movie';

let initialState = {
    loading : false,
    datas: [],
    errorMessage : '',
   
};

let movieReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_MOVIES_REQUEST :
        case FETCH_SERIES_REQUEST :    
            return {
                ...state,
                loading : true
            };
        case FETCH_MOVIES_SUCCESS :
        case FETCH_SERIES_SUCCESS :    
            return  {
                ...state,
                loading: false,
                datas: payload
            };
        case FETCH_MOVIES_FAILURE :
        case FETCH_SERIES_FAILURE :    
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};
export {movieReducer};

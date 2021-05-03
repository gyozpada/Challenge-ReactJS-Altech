import {combineReducers} from "redux";
import { movieReducer, MOVIE_FEATURE_KEY } from "./contacts/movies.reducer";

let rootReducer = combineReducers({
    [MOVIE_FEATURE_KEY] : movieReducer
});

export {rootReducer};

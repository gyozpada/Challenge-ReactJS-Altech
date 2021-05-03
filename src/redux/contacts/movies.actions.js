import Axios from "axios";

import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_SERIES_REQUEST,
  FETCH_SERIES_SUCCESS,
  FETCH_SERIES_FAILURE,
} from "./movies.actionTypes";

let fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    let fURL =
      "https://raw.githubusercontent.com/jagjotsinghparry/MCR-React-L1-1/master/feed/sample.json";
    Axios.get(fURL)
      .then((response) => {
        let allMovies = response.data.entries;
        let movies = allMovies.filter((movie) => {
          return movie.programType === "movie";
        });
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error });
      });
  };
};

let fetchSeries = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SERIES_REQUEST });
    let fURL =
      "https://raw.githubusercontent.com/jagjotsinghparry/MCR-React-L1-1/master/feed/sample.json";
    Axios.get(fURL)
      .then((response) => {
        let allMovies = response.data.entries;
        let series = allMovies.filter((serie) => {
          return serie.programType === "series";
        });
        dispatch({ type: FETCH_SERIES_SUCCESS, payload: series });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SERIES_FAILURE, payload: error });
      });
  };
};

export { fetchMovies, fetchSeries };

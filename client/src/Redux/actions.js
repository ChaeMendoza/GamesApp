const axios = require("axios");

/* GEts */
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_DETAILS = 'GET_DETAILS';
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
/* Other Method */
export const DELETE_VIDEOGAMES = 'DELETE_VIDEOGAMES';
/* URl */
const VIDEOGAMES_URL = 'http://localhost:3001/videogames/';
const GENRES_URL = 'http://localhost:3001/genres/';

/* GetAll VideoGames */
export function getVideoGames() {
    return function(dispatch) {
        return axios.get(VIDEOGAMES_URL)
            .then((videoGames) => {
                dispatch({
                    type: GET_VIDEOGAMES,
                    payload: videoGames.data
                })
            })
    }
}

/* Get All Genres */
export function getGenres() {
    return function(dispatch) {
        return axios.get(GENRES_URL)
            .then((genres) =>{
                dispatch({
                    type: GET_GENRES,
                    payload: genres.data
                })
            })
    }
}


/* Create VideoGame */
export function postVideogame(payload) {
    return async function (dispatch) {
        const response = axios.post("http://localhost:3001/videogame", payload);
        console.log(response);
        return response;
    };
}

/* Search by name */
export function searchVideogames(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(
                "http://localhost:3001/videogames?name=" + name
            );
            return dispatch({
                type: SEARCH_VIDEOGAMES,
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

/* Filter by genre */
export function filterVideogamesByGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload,
    };
}

/* Filter by createDb or Api */
export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload,
    };
}

/* Filter by Alphabetic */
export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload,
    };
}

/* Details */
export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/videogame/" + id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const deleteVideoGame = (payload) => {
    return {
        type: DELETE_VIDEOGAMES,
        payload
    }
}

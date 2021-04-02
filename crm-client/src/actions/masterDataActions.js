import axios from "axios";
import { GET_COUNTRY, GET_LANGUAGE, GET_TITLE, GET_STATE, GET_TAGS } from "./types";

export const getCountries = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/master/country");
    dispatch({
        type: GET_COUNTRY,
        payload: res.data
    });
};

export const getTags = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/master/tags");
    dispatch({
        type: GET_TAGS,
        payload: res.data
    });
};

export const getState = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/master/state");
    dispatch({
        type: GET_STATE,
        payload: res.data
    });
};

export const getLanguage = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/master/language");
    dispatch({
        type: GET_LANGUAGE,
        payload: res.data
    });
};

export const getTitle = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/master/title");
    dispatch({
        type: GET_TITLE,
        payload: res.data
    });
};
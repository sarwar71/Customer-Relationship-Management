import { GET_COUNTRY, GET_LANGUAGE, GET_TITLE, GET_STATE, GET_TAGS } from "../actions/types";

const initialState = {
    countries: [],
    tagss: [],
    languages: [],
    titles: [],
    states: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            };

        case GET_LANGUAGE:
            return {
                ...state,
                languages: action.payload
            };

        case GET_TITLE:
            return {
                ...state,
                titles: action.payload
            };

        case GET_STATE:
            return {
                ...state,
                states: action.payload
            };

        case GET_TAGS:
            return {
                ...state,
                tagss: action.payload
            };
        default:
            return state;
    }
}

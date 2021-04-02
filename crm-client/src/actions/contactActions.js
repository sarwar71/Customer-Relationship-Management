import axios from "axios";
import { GET_ERRORS, GET_CONTACT } from "./types";

export const createContact = (contact, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/api/contact/new", contact);
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getContact = (id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/contact/customer/${id}`);
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      });
    } catch (error) {
      
    }
  };
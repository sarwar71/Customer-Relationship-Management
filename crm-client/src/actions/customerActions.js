import axios from "axios";
import { GET_ERRORS, GET_CUSTOMERS, GET_CUSTOMER, DELETE_CUSTOMER } from "./types";

export const createCustomer = (customer, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/api/customer/new", customer);
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

export const updateCustomer = (customer, history) => async dispatch => {
  try {
    await axios.put(`http://localhost:8080/api/customer/edit/${customer.id}`, customer);
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

export const getCustomers = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/customer/all");
  dispatch({
    type: GET_CUSTOMERS,
    payload: res.data
  });
};

export const getCustomer = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/customer/${id}`);
    dispatch({
      type: GET_CUSTOMER,
      payload: res.data
    });
  } catch (error) {
    history.push("/");
  }
};

export const deleteCustomer = id => async dispatch => {
  if (window.confirm("Are you usre? You delete this customer.")) {
    await axios.delete(`http://localhost:8080/api/customer/delete/${id}`);
    dispatch({
      type: DELETE_CUSTOMER,
      payload: id
    });
  }
};
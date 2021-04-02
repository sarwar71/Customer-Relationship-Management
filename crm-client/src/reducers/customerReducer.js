import { GET_CUSTOMERS, GET_CUSTOMER, DELETE_CUSTOMER } from "../actions/types";

const initialState = {
  customers: [],
  customer: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload
        )
      }
    default:
      return state;
  }
}

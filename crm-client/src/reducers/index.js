import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import customerReducer from "./customerReducer"
import masterReducer from "./masterReducer"
import contactReducer from "./contactReducer"

export default combineReducers({
  errors: errorReducer,
  customer: customerReducer,
  master: masterReducer,
  contact: contactReducer
});
import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layouts/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AddCustomer from "./components/customers/AddCustomer";
import ViewAllCustomers from "./components/customers/ViewAllCustomers"
import UpdateCustomer from "./components/customers/UpdateCustomer"
import ViewCustomerDetails from "./components/customers/ViewCustomerDetails"
import AddContact from "./components/contacts/AddContact"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={ViewAllCustomers} />
            <Route exact path="/new" component={AddCustomer} />
            <Route exact path="/edit/:id" component={UpdateCustomer} />
            <Route exact path="/details/:id" component={ViewCustomerDetails} />
            <Route exact path="/contact/new/:id" component={AddContact} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

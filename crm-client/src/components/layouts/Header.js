import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="btn btn-md btn-info bg-dark">
            CRM
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;

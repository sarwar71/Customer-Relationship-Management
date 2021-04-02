import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCustomer } from "../../actions/customerActions";
import { getContact } from "../../actions/contactActions";

class ViewCustomerDetails extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCustomer(id, this.props.history);
    this.props.getContact(id, this.props.history);
  }

  render() {
    const { customer } = this.props.customer;
    const { contact } = this.props.contact;
    return (
      <div>
        <div className="customer">
          <div className="navbar navbar-expand-sm py-1 navbar-dark bg-secondary border-dark border-bottom">
            <div className="container">
              <div className="col">
                <div className="row">
                  <h5>Customers / {customer.name}</h5>
                </div>
                <div className="row">
                  <Link
                    to={`/edit/${customer.id}`}
                    className="btn btn-md btn-info bg-dark ml-1"
                  >
                    Edit
                  </Link>
                  <Link to="/new" className="btn btn-md btn-info bg-dark">
                    Create
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="container mt-4">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Name</p>
                    </div>
                    <div className="col-8">
                      <p className="text-left">{customer.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Address</p>
                    </div>
                    <div className="col-8">
                      <div className="">
                        <p className="text-left">{customer.street1}</p>
                      </div>
                      {customer.street2 && (
                        <div className="">
                          <p className="text-left">{customer.street2}</p>
                        </div>
                      )}
                      <div className="row ml-1">
                        <p className="">{customer.city}, </p>
                        <p className="">{customer.state}, </p>
                        <p className="">{customer.zip}</p>
                      </div>
                      <div className="">
                        <p className="text-left">{customer.country}</p>
                      </div>
                    </div>
                  </div>
                  {customer.website && (
                    <div className="row">
                      <div className="col-4">
                        <p className="text-left">Wevsite</p>
                      </div>
                      <div className="col-8">
                        <p className="text-left">{customer.website}</p>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Tags</p>
                    </div>
                    <div className="col-8">
                      <p className="text-left">{customer.tags}</p>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Phone</p>
                    </div>
                    <div className="col-8">
                      <p className="text-left">{customer.phone}</p>
                    </div>
                  </div>
                  {customer.mobile && (
                    <div className="row">
                      <div className="col-4">
                        <p className="text-left">Mobile</p>
                      </div>
                      <div className="col-8">
                        <p className="text-left">{customer.mobile}</p>
                      </div>
                    </div>
                  )}
                  {customer.fax && (
                    <div className="row">
                      <div className="col-4">
                        <p className="text-left">Fax</p>
                      </div>
                      <div className="col-8">
                        <p className="text-left">{customer.fax}</p>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Email</p>
                    </div>
                    <div className="col-8">
                      <p className="text-left">{customer.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="text-left">Language</p>
                    </div>
                    <div className="col-8">
                      <p className="text-left">{customer.language}</p>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <h5 className="text-left">Contacts & Addresses</h5>
              <hr />

              <div className="">
                <Link to={`/contact/new/${customer.id}`}>
                  <button className="btn btn-md btn-info bg-secondary d-flex">
                    Create
                  </button>
                </Link>
              </div>
              <div className="row mt-3">
                {contact.map(contact => (
                  <div className="col6 ml-2">
                    <div className="card border-dark mb-3">
                      <div className="card-header">{contact.contactName}</div>
                      <div className="card-body text-dark">
                        <p className="card-text">{contact.title}</p>
                        <p className="card-text small">{contact.jobPosition}</p>
                        <p className="card-text small">{contact.email}</p>
                        <p className="card-text small">{contact.phone}</p>
                        {contact.mobile && (
                          <p className="card-text small">{contact.mobile}</p>
                        )}
                        {contact.notes && (
                          <p className="card-text small">{contact.notes}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewCustomerDetails.propTypes = {
  customer: PropTypes.object.isRequired,
  getCustomer: PropTypes.func.isRequired,

  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer,
  contact: state.contact
});

export default connect(mapStateToProps, { getCustomer, getContact })(
  ViewCustomerDetails
);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCustomers } from "../../actions/customerActions";
import { deleteCustomer } from "../../actions/customerActions";
import { updateCustomer } from "../../actions/customerActions";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ViewAllCustomers extends Component {

    componentDidMount() {
        this.props.getCustomers();
    }

    onDeleteClick = id => {
        this.props.deleteCustomer(id);
    };

    render() {
        const { customers } = this.props.customer;
        return (
            <div>
                <div className="customer">
                    <div className="navbar navbar-expand-sm py-1 navbar-dark bg-secondary border-dark border-bottom">
                        <div className="container">
                            <div className="col">
                                <div className="row">
                                    <h5>Customers</h5>
                                </div>
                                <div className="row">
                                    <Link to="/new" className="btn btn-md btn-info bg-dark">
                                        Create
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <table className="table">
                            <thead className="table table-primary">
                                <tr>
                                    <th className="text-left" scope="col">Name</th>
                                    <th className="text-left" scope="col">Tags</th>
                                    <th className="text-left" scope="col">Phone</th>
                                    <th className="text-left" scope="col">Email</th>
                                    <th className="text-left" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map(customer => (
                                    //<CustomerItem key={customer.id} customer={customer} />
                                    <tr>
                                        <Link to={`/details/${customer.id}`}>
                                            <td className="text-left">{customer.name}</td>
                                        </Link>
                                        <td className="text-left">{customer.tags}</td>
                                        <td className="text-left">{customer.phone}</td>
                                        <td className="text-left">{customer.email}</td>

                                        <td className="text-left ml-5">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    customer.id
                                                )}
                                            >
                                                <span className=""></span>Delete
                                            </button>
                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

ViewAllCustomers.propTypes = {
    customer: PropTypes.object.isRequired,
    getCustomers: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    customer: state.customer
});

export default connect(mapStateToProps, { getCustomers, deleteCustomer, updateCustomer })(ViewAllCustomers);
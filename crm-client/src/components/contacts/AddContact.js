import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createContact } from "../../actions/contactActions";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { getTitle } from "../../actions/masterDataActions"

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactName: "",
            title: "",
            jobPosition: "",
            email: "",
            phone: "",
            mobile: "",
            notes: "",
            customerId: "",
            errors: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getTitle();
    }

    //life cycle hooks
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newContact = {
            contactName: this.state.contactName,
            title: this.state.title,
            jobPosition: this.state.jobPosition,
            email: this.state.email,
            phone: this.state.phone,
            mobile: this.state.mobile,
            notes: this.state.notes,
            customerId: this.props.match.params.id
        };

        this.props.createContact(newContact, this.props.history);
    }

    render() {

        const { errors } = this.state;
        const { titles } = this.props.master;

        return (
            <div>
                <div className="customer">
                    <div className="navbar navbar-expand-sm py-1 navbar-dark bg-secondary border-dark border-bottom">
                        <div className="container">
                            <div className="col">
                                <div className="row">
                                    <h5>Contacts / new</h5>
                                </div>
                                <div className="row">
                                    {/* <Link to="">
                                        <button
                                            className="btn btn-md btn-info bg-dark ml-1"
                                            onClick={this.onSubmit.bind(
                                                this.onSubmit
                                            )}
                                        >Save & Close</button>
                                    </Link>

                                    <Link to="/">
                                        <button
                                            className="btn btn-md btn-info bg-dark ml-1"
                                            onClick={this.onSubmit.bind(
                                                this.onSubmit
                                            )}
                                        >Save & New</button>
                                    </Link> */}

                                    <Link to="/">
                                        <button
                                            className="btn btn-md btn-info bg-dark ml-1"
                                            onClick={this.onSubmit.bind(
                                                this.onSubmit
                                            )}
                                        >Save</button>
                                    </Link>

                                    <div>
                                        <Link to="/" className="btn btn-md btn-info bg-dark">
                                            Discard
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="container mt-4">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                    <div className="col-1"></div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="d-flex">Contact Name</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.contactName
                                                })}
                                                placeholder="Contact Name"
                                                name="contactName"
                                                value={this.state.contactName}
                                                onChange={this.onChange}
                                            />
                                            {errors.contactName && (
                                                <div className="invalid-feedback d-flex">{errors.contactName}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Title</label>
                                            <select
                                                id="inputLanguage"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.title
                                                })}
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.onChange}
                                            >
                                                <option>Title</option>
                                                {titles.map(titl => (
                                                    <option>{titl}</option>
                                                ))}
                                            </select>
                                            {errors.title && (
                                                <div className="invalid-feedback d-flex">{errors.title}</div>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label className="d-flex">Job Position</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm", {
                                                    "is-invalid": errors.jobPosition
                                                })}
                                                placeholder="Job Position"
                                                name="jobPosition"
                                                value={this.state.jobPosition}
                                                onChange={this.onChange}
                                            />
                                            {errors.jobPosition && (
                                                <div className="invalid-feedback d-flex">{errors.jobPosition}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Email</label>
                                            <input
                                                type="email"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.email
                                                })}
                                                placeholder="Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback d-flex">{errors.email}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="d-flex">Phone</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.phone
                                                })}
                                                placeholder="Phone"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChange}
                                            />
                                            {errors.phone && (
                                                <div className="invalid-feedback d-flex">{errors.phone}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Mobile</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="mobile"
                                                name="mobile"
                                                value={this.state.mobile}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Notes</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Notes"
                                                name="notes"
                                                value={this.state.notes}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AddContact.propTypes = {

    errors: PropTypes.object.isRequired,

    createContact: PropTypes.func.isRequired,
    getTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    master: state.master

});

export default connect(mapStateToProps,
    { createContact, getTitle })(AddContact);

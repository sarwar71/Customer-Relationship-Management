import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { updateCustomer } from "../../actions/customerActions";
import { getCustomer } from "../../actions/customerActions";

import { getCountries } from "../../actions/masterDataActions"
import { getTags } from "../../actions/masterDataActions"
import { getState } from "../../actions/masterDataActions"
import { getLanguage } from "../../actions/masterDataActions"
import { getTitle } from "../../actions/masterDataActions"

class AddCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            image: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            website: "",
            tags: "",
            phone: "",
            mobile: "",
            fax: "",
            email: "",
            language: "",
            errors: [],
            customerValue: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCustomer(id, this.props.history);

        this.props.getCountries();
        this.props.getLanguage();
        this.props.getState();
        this.props.getTags();
        this.props.getTitle();

        const {customer} = this.props.customer;

        
        this.setState({ customerValue: customer})
        console.log("customer: ", customer);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e) {

        const target = e.target;
        const value = target.value;
        const name = target.name;

        let customerValue = {...this.state.customerValue};
        customerValue[name] = value;
        this.setState({customerValue});

        console.log("customer value", customerValue)
    }

    onSubmit(e) {
        e.preventDefault();
        const updateCustomer = {
            id: this.state.customerValue.id,
            name: this.state.customerValue.name,
            image: this.state.customerValue.image,
            street1: this.state.customerValue.street1,
            street2: this.state.customerValue.street2,
            city: this.state.customerValue.city,
            state: this.state.customerValue.state,
            zip: this.state.customerValue.zip,
            country: this.state.customerValue.country,
            website: this.state.customerValue.website,
            tags: this.state.customerValue.tags,
            phone: this.state.customerValue.phone,
            mobile: this.state.customerValue.mobile,
            fax: this.state.customerValue.fax,
            email: this.state.customerValue.email,
            language: this.state.customerValue.language
        };

        this.props.updateCustomer(updateCustomer, this.props.history);
    }

    render() {

        const { errors } = this.state;

        const { tagss } = this.props.master;
        const { countries } = this.props.master;
        const { languages } = this.props.master;
        const { states } = this.props.master;

        return (
            <div>
                <div className="customer">
                    <div className="navbar navbar-expand-sm py-1 navbar-dark bg-secondary border-dark border-bottom">
                        <div className="container">
                            <div className="col">
                                <div className="row">
                                    <h5>Customers / {this.state.customerValue.name}</h5>
                                </div>
                                <div className="row">
                                    <button
                                        className="btn btn-md btn-info bg-dark ml-1"
                                        onClick={this.onSubmit.bind(
                                            this.onSubmit
                                        )}
                                    >Save</button>

                                    <Link to="/" className="btn btn-md btn-info bg-dark">
                                        Discard
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="container mt-4">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label className="d-flex">Name</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.name
                                                })}
                                                placeholder="Customer Name"
                                                name="name"
                                                value={this.state.customerValue.name}
                                                onChange={this.onChange}
                                            />
                                            {errors.name && (
                                                <div className="invalid-feedback d-flex">{errors.name}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Address</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.street1
                                                })}
                                                placeholder="Street 1..."
                                                name="street1"
                                                value={this.state.customerValue.street1}
                                                onChange={this.onChange}
                                            />
                                            {errors.street1 && (
                                                <div className="invalid-feedback d-flex">{errors.street1}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Street 2..."
                                                name="street2"
                                                value={this.state.customerValue.street2}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-5">
                                                <input
                                                    type="text"
                                                    className={classnames(
                                                        "form-control form-control-sm ",
                                                        {
                                                            "is-invalid": errors.city
                                                        }
                                                    )}
                                                    placeholder="City"
                                                    name="city"
                                                    value={this.state.customerValue.city}
                                                    onChange={this.onChange}
                                                />
                                                {errors.city && (
                                                    <div className="invalid-feedback d-flex">{errors.city}</div>
                                                )}
                                            </div>
                                            <div className="form-group col-md-4">
                                                <select
                                                    id="inputState"
                                                    className={classnames(
                                                        "form-control form-control-sm ",
                                                        {
                                                            "is-invalid": errors.state
                                                        }
                                                    )}
                                                    name="state"
                                                    value={this.state.customerValue.state}
                                                    onChange={this.onChange}
                                                >
                                                    <option>State... </option>
                                                    {states.map(stat => (
                                                        <option>{stat}</option>
                                                    ))}

                                                </select>
                                                {errors.state && (
                                                    <div className="invalid-feedback d-flex">{errors.state}</div>
                                                )}
                                            </div>
                                            <div className="form-group col-md-3">
                                                <input
                                                    type="text"
                                                    className={classnames(
                                                        "form-control form-control-sm ",
                                                        {
                                                            "is-invalid": errors.zip
                                                        }
                                                    )}
                                                    placeholder="Zip"
                                                    name="zip"
                                                    value={this.state.customerValue.zip}
                                                    onChange={this.onChange}
                                                />
                                                {errors.zip && (
                                                    <div className="invalid-feedback d-flex">{errors.zip}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                id="inputLanguage"
                                                className={classnames(
                                                    "form-control form-control-sm col-md-12",
                                                    {
                                                        "is-invalid": errors.country
                                                    }
                                                )}
                                                name="country"
                                                value={this.state.customerValue.country}
                                                onChange={this.onChange}
                                            >
                                                <option>Country</option>
                                                {countries.map(count => (
                                                    <option>{count}</option>
                                                ))}
                                            </select>
                                            {errors.country && (
                                                <div className="invalid-feedback d-flex">{errors.country}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Website</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm", {
                                                    "is-invalid": errors.website
                                                })}
                                                placeholder="Website"
                                                name="website"
                                                value={this.state.customerValue.website}
                                                onChange={this.onChange}
                                            />
                                            {errors.website && (
                                                <div className="invalid-feedback d-flex">{errors.website}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Tags</label>
                                            <select
                                                id="inputTags"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.tags
                                                })}
                                                name="tags"
                                                value={this.state.customerValue.tags}
                                                onChange={this.onChange}
                                            >
                                                <option>Tags... </option>
                                                {tagss.map(tag => (
                                                    <option>{tag}</option>
                                                ))}
                                            </select>
                                            {errors.tags && (
                                                <div className="invalid-feedback d-flex">{errors.tags}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label className="d-flex">Phone</label>
                                            <input
                                                type="text"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.phone
                                                })}
                                                placeholder="Phone"
                                                name="phone"
                                                value={this.state.customerValue.phone}
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
                                                value={this.state.customerValue.mobile}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Fax</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Fax"
                                                name="fax"
                                                value={this.state.customerValue.fax}
                                                onChange={this.onChange}
                                            />
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
                                                value={this.state.customerValue.email}
                                                onChange={this.onChange}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback d-flex">{errors.email}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex">Language</label>
                                            <select
                                                id="inputLanguage"
                                                className={classnames("form-control form-control-sm ", {
                                                    "is-invalid": errors.language
                                                })}
                                                name="language"
                                                value={this.state.customerValue.language}
                                                onChange={this.onChange}
                                            >
                                                <option >Language</option>
                                                {languages.map(lang => (
                                                    <option>{lang}</option>
                                                ))}
                                            </select>
                                            {errors.language && (
                                                <div className="invalid-feedback d-flex">
                                                    {errors.language}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <br />
                            <h5 className="text-left">Contacts & Addresses</h5>
                            <hr />
                            <div className="">
                                <button className="btn btn-md btn-info bg-secondary d-flex">
                                    Create
                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddCustomer.propTypes = {
    errors: PropTypes.object.isRequired,
    customer: PropTypes.object.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    getCustomer: PropTypes.func.isRequired,

    master: PropTypes.object.isRequired,
    getCountries: PropTypes.func.isRequired,
    getLanguage: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    getTags: PropTypes.func.isRequired,
    getTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    customer: state.customer,
    master: state.master
});

export default connect(mapStateToProps,
    { getCustomer, updateCustomer, getCountries, getLanguage, getState, getTags, getTitle })(AddCustomer);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createCustomer } from "../../actions/customerActions";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { getCountries } from "../../actions/masterDataActions";
import { getTags } from "../../actions/masterDataActions";
import { getState } from "../../actions/masterDataActions";
import { getLanguage } from "../../actions/masterDataActions";

class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCountries();
    this.props.getLanguage();
    this.props.getState();
    this.props.getTags();
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
    const newCustomer = {
      name: this.state.name,
      street1: this.state.street1,
      street2: this.state.street2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      country: this.state.country,
      website: this.state.website,
      tags: this.state.tags,
      phone: this.state.phone,
      mobile: this.state.mobile,
      fax: this.state.fax,
      email: this.state.email,
      language: this.state.language,

      customerEmail: this.state.email
    };

    this.props.createCustomer(newCustomer, this.props.history);
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
                  <h5>Customers / new</h5>
                </div>
                <div className="row">
                  <Link to="/">
                    <button
                      className="btn btn-md btn-info bg-dark ml-1"
                      onClick={this.onSubmit.bind(this.onSubmit)}
                    >
                      Save
                    </button>
                  </Link>

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
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-flex">
                          {errors.name}
                        </div>
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
                        value={this.state.street1}
                        onChange={this.onChange}
                      />
                      {errors.street1 && (
                        <div className="invalid-feedback d-flex">
                          {errors.street1}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Street 2..."
                        name="street2"
                        value={this.state.street2}
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
                          value={this.state.city}
                          onChange={this.onChange}
                        />
                        {errors.city && (
                          <div className="invalid-feedback d-flex">
                            {errors.city}
                          </div>
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
                          value={this.state.state}
                          onChange={this.onChange}
                        >
                          <option select>State... </option>
                          {states.map(state => (
                            <option>{state}</option>
                          ))}
                        </select>
                        {errors.state && (
                          <div className="invalid-feedback d-flex">
                            {errors.state}
                          </div>
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
                          value={this.state.zip}
                          onChange={this.onChange}
                        />
                        {errors.zip && (
                          <div className="invalid-feedback d-flex">
                            {errors.zip}
                          </div>
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
                        value={this.state.country}
                        onChange={this.onChange}
                      >
                        <option select>Country</option>
                        {countries.map(country => (
                          <option>{country}</option>
                        ))}
                      </select>
                      {errors.country && (
                        <div className="invalid-feedback d-flex">
                          {errors.country}
                        </div>
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
                        value={this.state.website}
                        onChange={this.onChange}
                      />
                      {errors.website && (
                        <div className="invalid-feedback d-flex">
                          {errors.website}
                        </div>
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
                        value={this.state.tags}
                        onChange={this.onChange}
                      >
                        <option select>Tags... </option>
                        {tagss.map(tag => (
                          <option>{tag}</option>
                        ))}
                      </select>
                      {errors.tags && (
                        <div className="invalid-feedback d-flex">
                          {errors.tags}
                        </div>
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
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback d-flex">
                          {errors.phone}
                        </div>
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
                      <label className="d-flex">Fax</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Fax"
                        name="fax"
                        value={this.state.fax}
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
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-flex">
                          {errors.email}
                        </div>
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
                        value={this.state.language}
                        onChange={this.onChange}
                      >
                        <option select>Language</option>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddCustomer.propTypes = {
  createCustomer: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,

  master: PropTypes.object.isRequired,
  getCountries: PropTypes.func.isRequired,
  getLanguage: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  master: state.master
});

export default connect(mapStateToProps, {
  createCustomer,
  getCountries,
  getLanguage,
  getState,
  getTags
})(AddCustomer);

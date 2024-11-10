import React, { Component } from "react";

export default class DataEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      address: "",
      address2: "",
      city: "",
      province: "",
      postalcode: "",
      agree: false,
      submittedData: null,
    };
  }

  handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submittedData: { ...this.state },
    });
  };

  render() {
    const { submittedData } = this.state;

    return (
      <div className="form-container">
        <h2>Data Entry Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleInput}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInput}
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              value={this.state.address2}
              onChange={this.handleInput}
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select
              name="province"
              value={this.state.province}
              onChange={this.handleInput}
            >
              <option value="">Choose...</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="YT">Yukon</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalcode"
              value={this.state.postalcode}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={this.state.agree}
                onChange={this.handleInput}
              />
              Agree Terms & Conditions?
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h3>Submitted Information:</h3>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Full Name:</strong> {submittedData.fullname}
            </p>
            <p>
              <strong>Address:</strong> {submittedData.address}
            </p>
            <p>
              <strong>Address 2:</strong> {submittedData.address2}
            </p>
            <p>
              <strong>City:</strong> {submittedData.city}
            </p>
            <p>
              <strong>Province:</strong> {submittedData.province}
            </p>
            <p>
              <strong>Postal Code:</strong> {submittedData.postalcode}
            </p>
            <p>
              <strong>Agreed to Terms:</strong>{" "}
              {submittedData.agree ? "Yes" : "No"}
            </p>
          </div>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=9")
      .then((response) => {
        const persons = response.data.results;
        this.setState({ persons });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Person List</h1>
        <div className="row">
          {this.state.persons.map((person, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={person.picture.large}
                  className="card-img-top"
                  alt={`${person.name.first} ${person.name.last}`}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {person.name.first} {person.name.last}
                  </h5>
                  <p className="card-text">
                    <strong>Email:</strong> {person.email}
                    <br />
                    <strong>Location:</strong> {person.location.city},{" "}
                    {person.location.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;

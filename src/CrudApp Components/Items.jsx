import React, { Component } from "react";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      name: "ainsh",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  handleInput() {
    console.log("aa");
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="h2">Add new person</div>
          <input
            onChange={this.handleInput}
            value={this.state.name}
            type="text"
          />
          <button>Submit</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sn</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">1</td>
              <td scope="col">Anish Shrestha</td>
              <td>
                <button className="btn-danger mr-3">Delete</button>
                <button className="btn-primary">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

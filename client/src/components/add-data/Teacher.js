import React, { Component } from "react";

export class Teacher extends Component {
  state = {
    name: "",
    id: "",
    department: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log("state", this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Teacher Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Teacher Id</label>
            <input
              type="text"
              name="id"
              className="form-control"
              id="id"
              placeholder="Enter ID"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              placeholder="Enter Department"
              onChange={this.onChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Teacher;

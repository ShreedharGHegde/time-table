import React, { Component } from "react";

export class Subject extends Component {
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
            <label htmlFor="name">Subject Name</label>
            <input
              type="text"
              className="form-control"
              id="subjectName"
              name="subjectName"
              placeholder="Enter Subject Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sujectId">Subject Id</label>
            <input
              type="text"
              name="subjectId"
              className="form-control"
              id="subjectId"
              placeholder="Enter Subject ID"
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

export default Subject;

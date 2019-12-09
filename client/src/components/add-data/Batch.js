import React, { Component } from "react";

export class Batch extends Component {
  state = {
    semester: "",
    Section: "",
    department: "",
    stream:'',
    classRoom:''
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
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Stream</label>
            <input
              type="text"
              className="form-control"
              id="stream"
              name="stream"
              placeholder="Enter Stream"
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
            <label htmlFor="name">Semester</label>
            <input
              type="text"
              className="form-control"
              id="semester"
              name="semester"
              placeholder="Enter Semester"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Section</label>
            <input
              type="text"
              name="section"
              className="form-control"
              id="section"
              placeholder="Enter Section"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Class Room</label>
            <input
              type="text"
              name="classRoom"
              className="form-control"
              id="classRoom"
              placeholder="Enter Section"
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

export default Batch;

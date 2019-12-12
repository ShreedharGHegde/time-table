import React, { Component } from "react";
import axios from "axios";
import "./SampleTable.css";

export class SampleTable extends Component {
  state = {
    tableEditable: false,
    focus: null,
    icon: "icon-edit",
    firstName: ""
  };

  handleChange = e => {
    console.log('ref', this.refs.firstName.innerText)
    // this.setState(
    //   {
    //     firstName: e.target.value
    //   },
    //   () => {
    //     console.log("first name", this.state.firstName);
    //   }
    // );
  };

  changeTableProperty = () => {
    console.log("refs", this.refs.firstName.innerText);
    this.setState(
      {
        tableEditable: !this.state.tableEditable,
        icon: this.state.tableEditable ? "icon-edit" : "icon-check"
      },
      () => {
        this.tdInput.focus();
      }
    );
  };

  async componentDidMount() {
    axios
      .get("http://localhost:5000/api/batch")
      .then(res => {
        console.log("batch res", res.data);
      })
      .catch(err => console.log("batch err", err));
  }

  render() {
    console.log("state", this.state.firstName);

    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr onKeyPress={this.handleChange}>
              <td
                suppressContentEditableWarning={true}
                contentEditable={this.state.tableEditable}
                ref={td => {
                  this.tdInput = td;
                }}
              >
                1
              </td>
              <td
                contentEditable={this.state.tableEditable}
                onKeyPress={() => this.handleChange}
                ref="firstName"
              >
                Anna
              </td>
              <td contentEditable={this.state.tableEditable}>Pitt</td>
              <td contentEditable={this.state.tableEditable}>35</td>
              <td contentEditable={this.state.tableEditable}>New York</td>
              <td>
                <button
                  type="input"
                  className="btn btn-primary"
                  onClick={this.changeTableProperty}
                >
                  {" "}
                  <i className={this.state.icon}></i>
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-primary">
                  {" "}
                  <i className="icon-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SampleTable;

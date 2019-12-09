import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
              <h2 style={{color:'white'}}>Vibhaag</h2>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

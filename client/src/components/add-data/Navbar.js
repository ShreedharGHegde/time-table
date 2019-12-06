import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "300px" }}>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/teacher" style={{ textDecoration: "none" }}>
                    Teacher
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link to="/subject" style={{ textDecoration: "none" }}>
                    Subject
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link to="/class-room" style={{ textDecoration: "none" }}>
                    Class Room
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link to="/batch" style={{ textDecoration: "none" }}>
                    Batch
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/teacher">
              <div>Teacher</div>
            </Route>
            <Route path="/subject">
              <div>Subject</div>
            </Route>
            <Route path="/batch">
              <div>batch</div>
            </Route>
            <Route path="/class-room">
              <div>Class Room</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

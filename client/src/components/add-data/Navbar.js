import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Teacher from "./Teacher";
import { Subject } from "./Subject";
import { Batch } from "./Batch";
import SampleTable from "./SampleTable";
// import { ClassRoom } from "./ClassRoom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "300px" }}>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeStyle={{
                      backgroundColor: " #555",
                      color: "white",
                      textDecoration: "none"
                    }}
                    to="/teacher"
                  >
                    Teacher
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      backgroundColor: " #555",
                      color: "white",
                      textDecoration: "none"
                    }}
                    to="/subject"
                  >
                    Subject
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      backgroundColor: " #555",
                      color: "white",
                      textDecoration: "none"
                    }}
                    to="/class-room"
                  >
                    Class Room
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      backgroundColor: " #555",
                      color: "white",
                      textDecoration: "none"
                    }}
                    to="/batch"
                  >
                    Batch
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/teacher">
              <Teacher />
            </Route>
            <Route path="/subject">
              <Subject />
            </Route>
            <Route path="/batch">
              <SampleTable />
            </Route>
            {/* <Route path="/class-room">
              <ClassRoom />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

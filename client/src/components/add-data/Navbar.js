import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "300px" }}>
        <Router>
          <div style={{ margin: 0 }}>
            <nav>
              <ul>
                <li>
                  <h3>
                    <Link to="/teacher" style={{ textDecoration: "none" }}>
                      Teacher
                    </Link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <Link to="/class-room" style={{ textDecoration: "none" }}>
                      Class Room
                    </Link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <Link to="/subjec" style={{ textDecoration: "none" }}>
                      Subject
                    </Link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <Link to="/batch" style={{ textDecoration: "none" }}>
                      Batch
                    </Link>
                  </h3>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/teacher">
                <Teachers />
              </Route>
              <Route path="/batch">
                <Batches />
              </Route>
              <Route path="/class-room">
                <ClassRooms />
              </Route>
              <Route path="/subject">
                <Subjects />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function Teachers() {
  return <div style={{ marginLeft: "300px" }}>Teacher</div>;
}

function Batches() {
  return <div style={{ marginLeft: "25%" }}>Batches</div>;
}

function Subjects() {
  return <div style={{ marginLeft: "25%" }}>Subjects</div>;
}

function ClassRooms() {
  return <div style={{ marginLeft: "25%" }}>Class Rooms</div>;
}

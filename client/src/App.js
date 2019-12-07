import React from "react";
import TimeTableForm from "./components/TimeTableForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FormsNavbar from "./components/add-data/Navbar";
import PropTypes from "prop-types";

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>

        <Router>
          <div>
            <nav>
              <ul className="navUl">
                <li className="navLi">
                  <h3>
                    <NavLink
                    exact
                      to="/"
                      activeStyle={{
                        "backgroundColor":" #555",
                        "color": "white",
                        "textDecoration": "none"
                      }}
                    >
                      Home
                    </NavLink>
                  </h3>
                </li>
                <li className="navLi">
                  <h3>
                    <NavLink
                       activeStyle={{
                        "backgroundColor":" #555",
                        "color": "white",
                        "textDecoration": "none"
                      }}
                      to="/teacher"
                    >
                      Add data
                    </NavLink>
                  </h3>
                </li>
                <li className="navLi">
                  <h3>
                    <NavLink
                       activeStyle={{
                        "backgroundColor":" #555",
                        "color": "white",
                        "textDecoration": "none"
                      }}
                      to="/createtimetable"
                    >
                      Create Time Table
                    </NavLink>
                  </h3>
                </li>
                <li className="navLi">
                  <h3>
                    <NavLink
                      to="/users"
                      activeStyle={{
                        "backgroundColor":" #555",
                        "color": "white",
                        "textDecoration": "none"
                      }}
                    >
                      Users
                    </NavLink>
                  </h3>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/teacher">
                <FormsNavbar />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/createtimetable">
                <TimeTableForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

function Home() {
  return <div style={{ marginLeft: "300px" }}>Home</div>;
}

function Users() {
  return <div style={{ marginLeft: "25%" }}>Users</div>;
}


import React from "react";
import TimeTableForm from "./components/TimeTableForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FormsNavbar from "./components/add-data/Navbar";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
      </div>

      <Router>
        <div style={{ margin: 0 }}>
          <nav>
            <ul className="navUl">
              <li className="navLi">
                <h3>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </h3>
              </li>
              <li className="navLi">
                <h3>
                  <Link to="/add-data" style={{ textDecoration: "none" }}>
                    Add data
                  </Link>
                </h3>
              </li>
              <li className="navLi">
                <h3>
                  <Link
                    to="/createtimetable"
                    style={{ textDecoration: "none" }}
                  >
                    Create Time Table
                  </Link>
                </h3>
              </li>
              <li className="navLi">
                <h3>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                    Users
                  </Link>
                </h3>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-data">
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

function Home() {
  return (
    <div style={{ marginLeft: "300px" }}>
      Home
    </div>
  );
}

function Users() {
  return <div style={{ marginLeft: "25%" }}>Users</div>;
}

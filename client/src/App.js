import React from "react";
import TimeTableForm from "./components/TimeTableForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
       <Router>
      <div style={{ margin: 0 }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/createtimetable">Create Time Table</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/createtimetable">
            <TimeTableForm style={{ marginLeft: "25%" }} />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
   
  );
}

function Home() {
  return <div style={{ marginLeft: "25%" }}>Home</div>;
}

function About() {
  return <div style={{ marginLeft: "25%" }}>About</div>;
}

function Users() {
  return <div style={{ marginLeft: "25%" }}>Users</div>;
}

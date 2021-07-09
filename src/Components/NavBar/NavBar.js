import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import {
  FlatUI,
  GeneralPrinciples,
  Glassmorphism,
  GoldenRules,
  MaterialUI,
  Neumorphism,
  SoftUI,
} from "../../views";

import "./NavBar.css";

import Flayout from "../Flayout/Flayout";
import Zlayout from "../Zlayout/Zlayout";

export default class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav">
            {/* <ul style={{ textDecoration: "none", listStyle: "none" }}> */}
            <ul className="navList">
              <li>
                <NavLink to="/flat-ui">Flat UI</NavLink>
              </li>
              <li>
                <NavLink to="/general-principles">
                  General UI Design Principles
                </NavLink>
              </li>
              <li>
                <NavLink to="/golden-rule">Golden Rule of Thirds</NavLink>
              </li>
              <li>
                <NavLink to="/f-pattern">F-Layout</NavLink>
              </li>
              <li>
                <NavLink to="/z-pattern">Z-Layout</NavLink>
              </li>
              <li>
                <NavLink to="/soft-ui">Soft UI</NavLink>
              </li>
              <li>
                <NavLink to="/neuViews">Neumorphism</NavLink>
              </li>
              <li>
                <NavLink to="/glassmorphism">Glassmorphism</NavLink>
              </li>
              <li>
                <NavLink to="/flat-ui">Flat UI</NavLink>
              </li>
              <li>
                <NavLink to="/material-ui">Material UI</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/flat-ui" component={FlatUI} />

            <Route path="/general-principles" component={GeneralPrinciples} />

            <Route path="/golden-rule" component={GoldenRules} />

            <Route path="/f-layout" component={Flayout} />

            <Route path="/z-layout" component={Zlayout} />

            <Route path="/soft-ui" component={SoftUI} />

            <Route path="/neuViews" component={Neumorphism} />

            <Route path="/glassmorphism" component={Glassmorphism} />

            <Route path="/flat-ui" component={FlatUI} />

            <Route path="/material-ui" component={MaterialUI} />
          </Switch>
        </div>
      </Router>
    );
  }
}

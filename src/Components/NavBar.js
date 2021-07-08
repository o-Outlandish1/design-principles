import React from 'react'
import {
  BrowserRouter as Router,
Route,
Switch, NavLink
} from 'react-router-dom';
import {
  FlatUI,
  FPattern,
  GeneralPrinciples,
  Glassmorphism,
  GoldenRules,
  MaterialUI,
  Neumorphism,
  SoftUI,
  ZPattern
} from '../views/index';

export default class NavBar extends React.Component {
  render() {
     return (
    <Router>
      <div>
        <nav>
          <ul
          style={{textDecoration: 'none', listStyle: 'none'}}>
            <li>
              <NavLink
                to="/flat-ui">
                  Flat UI
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/general-principles">
                  General UI Design Principles
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/golden-rule">
                  Golden Rule of Thirds
                </NavLink>
            </li>
             <li>
              <NavLink
                to="/f-pattern">
                  F-Pattern
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/z-pattern">
                  Z-Pattern
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/soft-ui">
                  Soft UI
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/neumorphism">
                  Neumorphism
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/glassmorphism">
                  Glassmorphism
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/flat-ui">
                  Flat UI
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/material-ui">
                  Material UI
                </NavLink>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
              <Route
                path="/flat-ui"
                component={FlatUI}>
                  Flat UI
                </Route>

              <Route
                path="/general-principles"
                component={GeneralPrinciples}>
                  General UI Design Principles
                </Route>

              <Route
                path="/golden-rule"
                component={GoldenRules}>
                  Golden Rule of Thirds
                </Route>

              <Route
                path="/f-pattern"
                component={FPattern}>
                  F-Pattern
                </Route>

              <Route
                path="/z-pattern"
                component={ZPattern}>
                  Z-Pattern
                </Route>

              <Route
                path="/soft-ui"
                component={SoftUI}>
                  Soft UI
                </Route>

              <Route
                path="/neumorphism"
                component={Neumorphism}>
                  Neumorphism
                </Route>

              <Route
                path="/glassmorphism"
                component={Glassmorphism}>
                  Glassmorphism
                </Route>

              <Route
                path="/flat-ui"
                component={FlatUI}>
                  Flat UI
                </Route>

              <Route
                path="/material-ui"
                component={MaterialUI}>
                  Material UI
                </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}


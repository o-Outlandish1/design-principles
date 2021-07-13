import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import FlatUI from '../components/FlatUI/Button/Button';
import GeneralPrinciples from '../components/GeneralPrinciples/GeneralPrinciple';
import GoldenRules from '../components/GoldenRule/GoldenRule';
import Flayout from "../components/Flayout/Flayout";
import Zlayout from "../components/Zlayout/Zlayout";
import Neumorphism from '../components/Neumorphism/Neumorphism';
import Glassmorphism from '../components/Glassmorphism/Glassmorphism';
// import your component here

export default (
  <Switch>
    <Route path="/general-principles" component={ GeneralPrinciples } />
    <Route path="/golden-rule" component={ GoldenRules } />
    <Route path="/f-pattern" component={ Flayout } />
    <Route path="/z-pattern" component={ Zlayout } />
    <Route path="/neumorphism" component={ Neumorphism } />
    <Route path="/glassmorphism" component={ Glassmorphism } />
    {/* <Route path="/flat-ui" component={FlatUI} />
      <Route path="/material-ui" component={ MaterialUI } /> */}
  </Switch>
);

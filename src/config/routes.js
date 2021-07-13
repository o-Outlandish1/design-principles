import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import FlatUI from '../Components/FlatUI/Button/Button';
import GeneralPrinciples from '../Components/GeneralPrinciples/GeneralPrinciple';
import GoldenRules from '../Components/GoldenRule/GoldenRule';
import Flayout from "../Components/Flayout/Flayout";
import Zlayout from "../Components/Zlayout/Zlayout";
import Neumorphism from '../Components/Neumorphism/Neumorphism';
import Glassmorphism from '../Components/Glassmorphism/Glassmorphism';
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

import React from 'react';
import { Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
=======
import Carousel from '../components/Carousel/Carousel';
>>>>>>> 630a622a67ff009e1f20406c7be730b93f7b7586
=======

import Carousel from '../components/Carousel/Carousel';
>>>>>>> 70d5f903b7debf1ed90df54263d647f29b464101
import GeneralPrinciples from '../components/GeneralPrinciples/GeneralPrinciple';
import GoldenRules from '../components/GoldenRule/GoldenRule';
import Flayout from "../components/Flayout/Flayout";
import Zlayout from "../components/Zlayout/Zlayout";
import Neumorphism from '../components/Neumorphism/Neumorphism';
import Glassmorphism from '../components/Glassmorphism/Glassmorphism';
// import your component here*
import {FlatUI} from '../views/index';
<<<<<<< HEAD
<<<<<<< HEAD
import {MaterialUI} from '../views/index';
=======
import NeuPinkMode from '../components/Neumorphism/NeuPinkMode';

>>>>>>> 630a622a67ff009e1f20406c7be730b93f7b7586

=======
import {MaterialUI} from '../views/index';
import NeuPinkMode from '../components/Neumorphism/NeuPinkMode';

>>>>>>> 70d5f903b7debf1ed90df54263d647f29b464101
export default (
  <Switch>
    <Route path="/general-principles" component={ GeneralPrinciples } />
    <Route path="/golden-rule" component={ GoldenRules } />
    <Route path="/f-pattern" component={ Flayout } />
    <Route path="/z-pattern" component={ Zlayout } />
    <Route path="/neumorphism" component={ Neumorphism } />
    <Route path="/glassmorphism" component={ Glassmorphism } />
    <Route path="/flat-ui" component={FlatUI} />
<<<<<<< HEAD
<<<<<<< HEAD
    <Route path="/material-ui" component={ MaterialUI } />
=======
      {/* <Route path="/material-ui" component={ MaterialUI } /> */}
      <Route path="/neu-pink-mode" component={NeuPinkMode}/>
    <Route path="/" component={Carousel}/>
>>>>>>> 630a622a67ff009e1f20406c7be730b93f7b7586
=======
    <Route path="/material-ui" component={ MaterialUI } />
    <Route path="/neu-pink-mode" component={NeuPinkMode}/>
    <Route path="/" component={Carousel}/>
>>>>>>> 70d5f903b7debf1ed90df54263d647f29b464101
  </Switch>
);

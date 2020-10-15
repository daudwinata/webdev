import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home, Business } from './Pages';

import { Nav } from './Layout';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Business">
          <Business />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

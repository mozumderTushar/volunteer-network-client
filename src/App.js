import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header/>
            </Route>
            <Route path="/register/:registerId">
              <Register/>
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

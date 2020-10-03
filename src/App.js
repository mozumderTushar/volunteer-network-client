import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>name: {loggedInUser.name}</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
            <PrivateRoute path="/register/:registerId">
              <Register/>
            </PrivateRoute>
            <Route path="/login">
              <LogIn/>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;

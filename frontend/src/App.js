import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import Quote from './components/quote/Quote';


import {Provider} from 'react-redux';
import { loggedUser } from './action/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import History from './components/quote/History';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(()=>{
    store.dispatch(loggedUser());
  }, []);
  return(
  <Provider store = {store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className = "container">
          <Alert />
          <Switch>
            <Route exact path="/register" component = {Register} />
            <Route exact path="/Login" component = {Login} />
            <PrivateRoute exact path="/dashboard" component = {Dashboard} />
            <PrivateRoute exact path="/create-profile" component = {CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component = {EditProfile} />
            <PrivateRoute exact path="/quote" component = {Quote} />
            <PrivateRoute exact path="/history" component = {History} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;

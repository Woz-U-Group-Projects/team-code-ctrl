import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Register from './components/register';
import LoginForm from './components/login-form';


export default () => 
  <Switch>
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={ LoginForm } />
  </Switch>;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Login from './components/login-form';
import Home from './components/home';
import AddAlbum from './components/addAlbum';
import AddTrack from './components/addTrack';



export default () => 
  <Switch>
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/" exact component={Home} />
    <Route path="/add-album" exact component={AddAlbum} />
    <Route path="/add-track" exact component={AddTrack} />
  </Switch>;


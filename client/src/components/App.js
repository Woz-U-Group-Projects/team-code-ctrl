import React from 'react';
import { Router, Route }  from 'react-router-dom';

import '../index.css';

import history from '../history';

import Header from './Header';


import AlbumCreate from './albums/AlbumCreate';
import AlbumList from './albums/AlbumList';
import AlbumDelete from './albums/AlbumDelete';
import AlbumShow from './albums/AlbumShow';
import AlbumEdit from './albums/AlbumEdit';
import Home from './home';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={ Home } />
          <Route path="/albumList" exact component={AlbumList} />
          <Route path="/albums/new" exact component={AlbumCreate} />
          <Route path="/albums/:id" exact component={AlbumEdit} />
          <Route path="/albums/delete/:id" exact component={AlbumDelete} />
          <Route path="/albums/show" exact component={AlbumShow} />
        </div>
      </Router>
      <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
    <div id="hero-image"></div>
      <main role="main" className="App">
        <div id="hero-image"></div>
      </main>
    </div>
    
  );
  
};

export default App;

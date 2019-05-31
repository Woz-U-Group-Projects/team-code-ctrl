import React from 'react';
import { Router, Route }  from 'react-router-dom';

import history from '../history';

import Header from './Header';

import AlbumCreate from './albums/AlbumCreate';
import AlbumList from './albums/AlbumList';
import AlbumDelete from './albums/AlbumDelete';
import AlbumShow from './albums/AlbumShow';
import AlbumEdit from './albums/AlbumEdit';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={AlbumList} />
          <Route path="/albums/new" exact component={AlbumCreate} />
          <Route path="/albums/:id" exact component={AlbumEdit} />
          <Route path="/albums/delete" exact component={AlbumDelete} />
          <Route path="/albums/show" exact component={AlbumShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;


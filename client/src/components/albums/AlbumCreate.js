import React from 'react';
import { connect } from 'react-redux';
import { createAlbum } from '../../actions';
import  AlbumForm  from './AlbumForm';

class AlbumCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createAlbum(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create an Album</h3>
        <AlbumForm onSubmit={this.onSubmit} />
      </div>

    );
  };

}

export default connect(null, { createAlbum })(AlbumCreate);

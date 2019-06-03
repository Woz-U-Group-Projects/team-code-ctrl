import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum, editAlbum } from '../../actions';
import AlbumForm from './AlbumForm';

class AlbumEdit extends React.Component  {

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editAlbum(this.props.match.params.id, formValues);
  }

  render() {
    if(!this.props.album) {
      return <div>Loading .....</div>
    }

    return (
      <div>
        <h3>Edit an Album</h3>
          <AlbumForm 
            initialValues={this.props.album}
            onSubmit={this.onSubmit} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { album: state.albums[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchAlbum, editAlbum })(AlbumEdit);

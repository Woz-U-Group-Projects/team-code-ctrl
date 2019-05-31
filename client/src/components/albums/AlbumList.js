import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../../actions';

class AlbumList extends React.Component {

  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderAdminButtons(album) {
    if (album.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
            <Link to={`/albums/${album._id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">
            Delete
          </button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.albums.map(album => {
      return (
        <div className="item" key={album._id}>
          {this.renderAdminButtons(album)}
          <i className="large middle aligned icon music" />
          <div className="content">
            {album.albumName}
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/albums/new" className="ui button primary">Create New Album</Link>
        </div>
      );
    }
  }

  render() {
    return ( 
      <div>
        <h2>Albums</h2>
          <div className="ui celled list">
            {this.renderList()}
          </div>
            {this.renderCreate()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { 
    albums: Object.values(state.albums),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps,{ fetchAlbums })(AlbumList);

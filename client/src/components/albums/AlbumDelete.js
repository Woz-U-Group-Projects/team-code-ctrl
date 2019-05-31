import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom'
import { fetchAlbum, deleteAlbum } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';

class AlbumDelete extends React.Component {

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  renderActions() {
      const id = this.props.match.params.id;
    return (
    <React.Fragment>
      <button onClick={() => this.props.deleteAlbum(id)} 
              className="ui button negative">Danger
      </button>
      <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.album) {
      return "Are you sure you want to delete this ablum?";
    }

    return `Are you sure you want to delete ${this.props.album.albumName}?`;
  }

  render() {
    return (
      <Modal 
        title="Delete and Album"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { album: state.albums[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchAlbum, deleteAlbum })(AlbumDelete);

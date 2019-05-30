import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createAlbum } from '../../actions';

class AlbumCreate extends React.Component {

  renderError({ error, touched }) {
    if ( error && touched ) {
      return (
        <div className="ui error message">
              <div className="header">{error}</div>
          </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}
          <input {...input} autoComplete="off"/>
        </label>
          {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createAlbum(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="albumName" component={this.renderInput} label="Enter Title"/>
        <Field name="tracks" component={this.renderInput} label="Number of Tracks"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  };

}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'createAlbum',
  validate
})(AlbumCreate);

export default connect(null, { createAlbum })(formWrapped);

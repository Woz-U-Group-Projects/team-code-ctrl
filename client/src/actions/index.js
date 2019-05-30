import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ALBUM,
  FETCH_ALBUMS,
  FETCH_ALBUM,
  EDIT_ALBUM,
  DELETE_ALBUM
} from './types';

import albums from '../apis/albums';

export const signIn = ( userId ) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createAlbum = formValues => async ( dispatch, getState ) => {
  const { userId } = getState().auth;
  const response = await albums.post('/albums',{...formValues, userId});
  dispatch({type: CREATE_ALBUM, payload: response.data});
  history.push('/');
};

export const fetchAlbums = () => async dispatch => {
  const response = await albums.get('/albums');
  dispatch({type: FETCH_ALBUMS, payload: response.data});
}

export const fetchAlbum = (id) => async dispatch => {
  const response = await albums.get(`/albums/${id}`);
  dispatch({type: FETCH_ALBUM, payload: response.data});
}

export const editAlbum = (id, formValues) => async dispatch => {
  const response = await albums.put(`/albums/${id}`, formValues);
  dispatch({type: EDIT_ALBUM, payload: response.data});
}

export const deleteAlbum = (id) => async dispatch => {
  await albums.delete(`/albums/${id}`);
  dispatch({type: DELETE_ALBUM, payload: id});
}

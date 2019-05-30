import _ from 'lodash';
import {
  CREATE_ALBUM,
  FETCH_ALBUM,
  FETCH_ALBUMS,
  EDIT_ALBUM,
  DELETE_ALBUM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ALBUM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ALBUM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ALBUM:
      return _.omit(state, action.payload);
    case FETCH_ALBUMS: 
      return {...state, ..._.mapKeys(action.payload, '_id')};
    default:
      return state;
  }
}

import { combineReducers } from 'redux';

import { RECEIVE_EMAIL_SUCCESS } from '../actions';

function emailReducer(state = {}, { type, email }) {
  switch (type) {
    case RECEIVE_EMAIL_SUCCESS:
      return email;
    default:
      return state;
  }
}

export default combineReducers({
  details: emailReducer
});

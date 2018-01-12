import { combineReducers } from 'redux';

import { RECEIVE_INBOX_SUCCESS } from '../actions';

function inboxReducer(state = [], { type, emails }) {
  switch (type) {
    case RECEIVE_INBOX_SUCCESS:
      return emails;
    default:
      return state;
  }
}

export default combineReducers({
  emails: inboxReducer
});

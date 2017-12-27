import { combineReducers } from 'redux';

import { RECEIVE_INBOX } from '../actions';

function inboxReducer(state = [], { type, emails }) {
  switch (type) {
    case RECEIVE_INBOX:
      return emails;
    default:
      return state;
  }
}

export default combineReducers({
  emails: inboxReducer
});

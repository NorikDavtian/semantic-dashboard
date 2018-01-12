// Action Types
export const TOGGLE_SIDEBAR = 'NAV/TOGGLE_SIDEBAR';
// export const TOGGLE_LOADING = 'APP/TOGGLE_LOADING';
export const REQUEST_INBOX = 'API/REQUEST_INBOX';
export const RECEIVE_INBOX_SUCCESS = 'API/RECEIVE_INBOX_SUCCESS';
// export const RECEIVE_INBOX_FAILURE = 'API/RECEIVE_INBOX_FAILURE';
export const REQUEST_EMAIL = 'API/REQUEST_EMAIL';
export const RECEIVE_EMAIL_SUCCESS = 'API/RECEIVE_EMAIL_SUCCESS';
// export const RECEIVE_EMAIL_FAILURE = 'API/RECEIVE_EMAIL_FAILURE';
export const RECEIVE_ERROR_MESSAGE = 'APP/RECEIVE_ERROR_MESSAGE';

// Action Creators
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
export const requestInbox = () => ({ type: REQUEST_INBOX });
export const requestEmail = ({ id }) => ({
  type: REQUEST_EMAIL,
  id
});

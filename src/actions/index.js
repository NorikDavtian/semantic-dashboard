// Action Types
export const TOGGLE_SIDEBAR = 'NAV/TOGGLE_SIDEBAR';
export const REQUEST_INBOX = 'API/REQUEST_INBOX';
export const RECEIVE_INBOX = 'API/RECEIVE_INBOX';
export const REQUEST_EMAIL = 'API/REQUEST_EMAIL';
export const RECEIVE_EMAIL = 'API/RECEIVE_EMAIL';
export const RECEIVE_FAILURE = 'STATE/RECEIVE_FAILURE';

// Action Creators
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
export const requestInbox = () => ({ type: REQUEST_INBOX });
export const requestEmail = ({ id }) => ({
  type: REQUEST_EMAIL,
  id
});

import { combineEpics } from 'redux-observable';
import getInboxEpic from './inbox';
import getEmailEpic from './email';

// import and combine rest of the epics here
const rootEpic = combineEpics(getInboxEpic, getEmailEpic);
export default rootEpic;

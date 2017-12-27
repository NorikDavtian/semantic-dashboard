import { combineEpics } from 'redux-observable';
import getInboxEpic from './inbox';

// import and combine rest of the epics here
const rootEpic = combineEpics(getInboxEpic);
export default rootEpic;

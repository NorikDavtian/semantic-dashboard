import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import { inbox } from '../../api';
import {
  RECEIVE_ERROR_MESSAGE, RECEIVE_INBOX_SUCCESS,
  REQUEST_INBOX
} from '../../actions';
import { home } from '../../config';

const getInboxEpic = action$ =>
  action$.ofType(REQUEST_INBOX).mergeMap(() =>
    Observable.from(inbox.getEmails()).flatMap(response => [
      {
        type: RECEIVE_INBOX_SUCCESS,
        emails: response
      }
    ]).catch(error => Observable.from([
      {
        type: RECEIVE_ERROR_MESSAGE,
        error
      },
      push(`${home}/login`)
    ]))
  );

export default getInboxEpic;

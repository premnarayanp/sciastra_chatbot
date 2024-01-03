import auth from './authReducer'
import chats from './chatReducer'

import {combineReducers} from 'redux';

  //using predefined redux combined reducers
  export default combineReducers({
        auth,
        chats
     });
  



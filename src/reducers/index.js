import { combineReducers } from 'redux';
import userMessagesReducer from './userMessageReducer';

export default combineReducers({
    userMessages: userMessagesReducer
})
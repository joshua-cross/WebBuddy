import { combineReducers } from 'redux';
import userMessagesReducer from './userMessageReducer';
import aiMessageReducer from './aiMessageReducer';

export default combineReducers({
    userMessages: userMessagesReducer,
    aiMessages: aiMessageReducer
})
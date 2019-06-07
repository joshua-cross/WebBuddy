import { combineReducers } from 'redux';
import userMessagesReducer from './userMessageReducer';
import aiMessageReducer from './aiMessageReducer';
import messageReducer from './messageReducer';

export default combineReducers({
    userMessages: userMessagesReducer,
    aiMessages: aiMessageReducer,
    messages: messageReducer
})
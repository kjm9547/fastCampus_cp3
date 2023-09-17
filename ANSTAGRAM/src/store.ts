import {combineReducers,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { feedListReducer, TypeFeedListReducer } from "./reducers/feedList";
import { TypeUserInfoReducer, userInfoReducer } from "./reducers/userInfo";
const rootReducer = combineReducers({
    userInfo:userInfoReducer,
    feedList:feedListReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export type RootReducer = {
    userInfo:TypeUserInfoReducer, 
    feedList:TypeFeedListReducer,}
import { combineReducers } from 'redux';
import {
  yourLocation,
  friendLocation,
  loadYourMap,
  loadFriendMap } from '../reducers/EndpointSearchReducers';


const rootReducer = combineReducers({
  yourLocation,
  friendLocation,
  loadYourMap,
  loadFriendMap
});

export default rootReducer;

import { combineReducers } from 'redux';
import {
  yourTextLocation,
  friendLocation,
  loadYourMap,
  loadFriendMap } from '../reducers/EndpointSearchReducers';


const rootReducer = combineReducers({
  yourTextLocation,
  friendLocation,
  loadYourMap,
  loadFriendMap
});

export default rootReducer;

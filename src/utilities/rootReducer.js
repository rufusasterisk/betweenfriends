import { combineReducers } from 'redux';
import {
  yourTextLocation,
  yourGPSLocation,
  loadingYourMap,
  displayYourMap,
  loadYourMapFailure,
  friendTextLocation,
  friendGPSLocation,
  loadingFriendMap,
  displayFriendMap,
  loadFriendMapFailure } from '../reducers/EndpointSearchReducers';


const rootReducer = combineReducers({
  yourTextLocation,
  yourGPSLocation,
  loadingYourMap,
  displayYourMap,
  loadYourMapFailure,
  friendTextLocation,
  friendGPSLocation,
  loadingFriendMap,
  displayFriendMap,
  loadFriendMapFailure
});

export default rootReducer;

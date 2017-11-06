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
  loadFriendMapFailure,
  mainGPSLocation,
  displayMainMap,
  vincentyDistance,
  mapBounds } from '../reducers/EndpointSearchReducers';


const rootReducer = combineReducers(
  {
    yourTextLocation,
    yourGPSLocation,
    loadingYourMap,
    displayYourMap,
    loadYourMapFailure,
    friendTextLocation,
    friendGPSLocation,
    loadingFriendMap,
    displayFriendMap,
    loadFriendMapFailure,
    mainGPSLocation,
    displayMainMap,
    vincentyDistance,
    mapBounds
  }
);

export default rootReducer;

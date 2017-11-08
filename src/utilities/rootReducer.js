import { combineReducers } from 'redux';
import { placesArray } from '../reducers/PlacesSearchReducers';
import {
  yourTextLocation,
  loadingYourMap,
  displayYourMap,
  loadYourMapFailure,
  friendTextLocation,
  loadingFriendMap,
  displayFriendMap,
  loadFriendMapFailure,
  displayMainMap,
  vincentyDistance,
  mapBounds,
  gpsLocations } from '../reducers/EndpointSearchReducers';


const rootReducer = combineReducers(
  { placesArray,
    yourTextLocation,
    loadingYourMap,
    displayYourMap,
    loadYourMapFailure,
    friendTextLocation,
    loadingFriendMap,
    displayFriendMap,
    loadFriendMapFailure,
    displayMainMap,
    vincentyDistance,
    mapBounds,
    gpsLocations
  }
);

export default rootReducer;

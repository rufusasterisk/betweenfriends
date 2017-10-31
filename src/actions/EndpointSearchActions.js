import locationCleaner from '../utilities/locationCleaner';
import { latlngAPIKey } from '../utilities/apiKey';

export const updateIndividualLocation = (locationString, locationType) => ({
  type: 'UPDATE_LOCATION',
  locationString,
  locationType
});

export const setGPSLocation = (latlngObject, locationType) => ({
  type: 'SET_GPS_LOCATION',
  GPS: latlngObject,
  locationType
});

export const shouldLoadMap = (option, locationType) => ({
  type: 'LOAD_INDIVIDUAL_MAP',
  option,
  locationType
});

export const displayMap = (option, locationType) => ({
  type: 'DISPLAY_INDIVIDUAL_MAP',
  option,
  locationType
});

export const loadMapFailure = (option, locationType) => ({
  type: 'LOAD_MAP_FAILURE',
  option,
  locationType
});

export const getMap = (locationString, locationType) => (dispatch) => {
  dispatch(shouldLoadMap(true, locationType));
  const cleanedQuery = locationCleaner(locationString);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=
    ${cleanedQuery}&key=${latlngAPIKey}`)
    .then(response => response.json())
    .then(resultsObject => {
      const latlngObject = {
        lat: resultsObject.results[0].geometry.location.lat,
        lng: resultsObject.results[0].geometry.location.lng
      };
      dispatch(updateIndividualLocation(locationString, locationType));
      dispatch(setGPSLocation(latlngObject, locationType));
      dispatch(shouldLoadMap(false, locationType));
      dispatch(displayMap(true, locationType));
    })
    .catch(error => {
      alert(error);
      dispatch(loadMapFailure(true, locationType));
      dispatch(shouldLoadMap(false, locationType));
    });
};

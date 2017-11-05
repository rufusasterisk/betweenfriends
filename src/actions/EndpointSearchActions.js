import locationCleaner from '../utilities/locationCleaner';
import { latlngAPIKey } from '../utilities/apiKey';
import vincenty from 'node-vincenty';

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

export const setDistance = (distance) => ({
  type: 'SET_DISTANCE',
  distance
});

export const getVincentyDistanceSync = (location1GPS, location2GPS) => {
  return vincenty.distVincenty(location1GPS.lat, location1GPS.lng,
    location2GPS.lat, location2GPS.lng).distance;
};

export const getVincentyDistance = (location1GPS, location2GPS) => dispatch => {
  console.log('running Vincenty');
  vincenty.distVincenty(location1GPS.lat, location1GPS.lng,
    location2GPS.lat, location2GPS.lng, function (distance) {
      dispatch(setDistance(distance));
      // dispatch(computeMapBounds(location1GPS, location2GPS, distance));
    });
};

export const findMidpoint = (location1GPS, location2GPS) => ({
  lat: (location1GPS.lat + location2GPS.lat)/2,
  lng: (location1GPS.lng + location2GPS.lng)/2
});

export const computeMainMap = (location1GPS, location2GPS) => dispatch => {
  const mainMapCenterGPS = findMidpoint(location1GPS, location2GPS);
  // {
  //   lat: (location1GPS.lat +
  //     location2GPS.lat)/2,
  //   lng: (location1GPS.lng +
  //     location2GPS.lng)/2
  // };
  dispatch(setGPSLocation(mainMapCenterGPS, 'main'));
  const distance = getVincentyDistanceSync(location1GPS, location2GPS);
  dispatch(setDistance(distance));
  const bounds = computeMapBounds(mainMapCenterGPS, distance);
  dispatch(setBounds(bounds));
};

export const computeMapBounds = (mainMapCenterGPS, distance) => {
  const nwRaw = vincenty.destVincenty(
    mainMapCenterGPS.lat,
    mainMapCenterGPS.lng,
    45, distance/Math.sqrt(2));
  const seRaw = vincenty.destVincenty(
    mainMapCenterGPS.lat,
    mainMapCenterGPS.lng,
    225, distance/Math.sqrt(2));

  return (
    {
      nw: {
        lat: nwRaw.lat,
        lng: nwRaw.lon },
      se: {
        lat: seRaw.lat,
        lng: seRaw.lon
      }
    });
};

export const setBounds = (bounds) => ({
  type: 'SET_MAP_BOUNDS',
  bounds
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
      dispatch(displayMap(true, locationType));
      dispatch(setGPSLocation(latlngObject, locationType));
      dispatch(shouldLoadMap(false, locationType));
    })
    .catch(error => {
      alert(error);
      dispatch(loadMapFailure(true, locationType));
      dispatch(shouldLoadMap(false, locationType));
    });
};

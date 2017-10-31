import locationCleaner from '../utilities/locationCleaner';
import { latlngAPIKey } from './apiKey';

const loadingLatLongAPI = ({ target, status}) => ({
  type: 'LOADING_LATLONG_DATA',
  target,
  status
});

const getLocationLatLong = (queryString, target) => (dispatch) => {
  dispatch(loadingLatLongAPI({ target, status: true}));
  const cleanedQuery = locationCleaner(queryString);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=
    ${cleanedQuery}&key=${latlngAPIKey}`)
    .then(response => {
      if (response.status !== 'OK') {
        throw Error(response);
      }
      return response.json();
    })
    .then(resultsArray => {
      const latlngObject = {
        lat: resultsArray[0].geometry.location.lat,
        lng: resultsArray[0].geometry.location.lng
      };
      dispatch(loadingLatLongAPI({ target, status: false}));
      dispatch(setLatLong({latlngObject, target}))
    })
    .catch();
};

export { getLocationLatLong };

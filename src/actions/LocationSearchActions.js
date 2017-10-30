import locationCleaner from '../utilities/locationCleaner';
import latlngAPIKey from './apiKey'

const loadingLatLongAPI = (target) => ({
  type: 'LOADING_LATLONG_DATA',
  target
});

const getLocationLatLong = (queryString, target) => (dispatch) => {
  dispatch(loadingLatLongAPI(target));
  const cleanedQuery = locationCleaner(queryString);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=
    ${cleanedQuery}&key=${latlngAPIKey}`)
    .then(response => response.json())
    .then(resultsArray => {
      const actionObject = {

      }
    });
};

export { getLocationLatLong };

import { apiKey } from '../utilities/apiKey';

export const submitPlacesSearch = (searchString, center, radius) =>
  dispatch => {
    fetch(`http://maps.googleapis.com/maps/api/place/nearbysearch/json?&key=${
      apiKey}&location=${center.lat},${center.lng}&radius=${
      radius}&keyword=${searchString}`,
    { credentials: 'omit',
      headers: {
        'Access-Control-Request-Headers': true
      }}
    )
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(responseData => {
        dispatch(setPlaces(responseData.results));
      });
  };

export const setPlaces = (placesArray) => ({
  type: 'SET_PLACES_ARRAY',
  placesArray
});

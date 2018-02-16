import { apiKey } from '../utilities/apiKey';
import locationCleaner from '../utilities/locationCleaner';


export const submitPlacesSearch = (searchString, center, radius) =>
  dispatch => {
    const cleanedSearchString = locationCleaner(searchString);
    // eslint-disable-next-line max-len
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?&key=${
      apiKey}&location=${center.lat},${center.lng}&radius=${
      radius}&keyword=${cleanedSearchString}`
    )
      .then(response => response.json())
      .then(responseData => {
        dispatch(setPlaces(responseData.results));
      })
      .catch(error => {
        alert('there was a problem with your request', error);
      });
  };

export const setPlaces = (placesArray) => ({
  type: 'SET_PLACES_ARRAY',
  placesArray
});

//https://cors-anywhere.herokuapp.com/

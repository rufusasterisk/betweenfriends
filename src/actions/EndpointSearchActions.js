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

export const loadYourMapFailure = (option, locationType) => ({
  type: 'LOAD_MAP_FAILURE',
  option,
  locationType
});

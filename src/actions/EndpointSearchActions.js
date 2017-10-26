export const updateIndividualLocation = (location, locationType) => ({
  type: 'UPDATE_LOCATION',
  location,
  locationType
});

export const shouldLoadMap = (option, mapType) => ({
  type: 'LOAD_INDIVIDUAL_MAP',
  option,
  mapType
});

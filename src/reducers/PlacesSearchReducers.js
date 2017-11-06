export const placesArray = (state = [], action) => {
  switch (action.type) {
  case 'SET_PLACES_ARRAY':
    return action.placesArray;
  default:
    return state;
  }
};

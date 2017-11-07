export const yourTextLocation = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION': {
    if (action.locationType === 'Your'){
      return action.locationString;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const yourGPSLocation = (state = {lat: 0, lng: 0}, action) => {
  switch (action.type) {
  case 'SET_GPS_LOCATION': {
    if (action.locationType === 'Your'){
      return action.GPS;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadingYourMap = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_INDIVIDUAL_MAP': {
    if (action.locationType === 'Your') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const displayYourMap = (state = false, action) => {
  switch (action.type) {
  case 'DISPLAY_INDIVIDUAL_MAP': {
    if (action.locationType === 'Your') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadYourMapFailure = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_MAP_FAILURE': {
    return action.locationType === 'Your' ? action.option : state;
  }
  default:
    return state;
  }
};

export const friendTextLocation = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION': {
    if (action.locationType === 'Friend'){
      return action.locationString;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const friendGPSLocation = (state = {lat: 0, lng: 0}, action) => {
  switch (action.type) {
  case 'SET_GPS_LOCATION': {
    if (action.locationType === 'Friend'){
      return action.GPS;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadingFriendMap = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_INDIVIDUAL_MAP': {
    if (action.locationType === 'Friend') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const displayFriendMap = (state = false, action) => {
  switch (action.type) {
  case 'DISPLAY_INDIVIDUAL_MAP': {
    if (action.locationType === 'Friend') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadFriendMapFailure = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_MAP_FAILURE': {
    return action.locationType === 'Friend' ? action.option : state;
  }
  default:
    return state;
  }
};

export const mainGPSLocation = (state = {
  lat: 39.7508006,
  lng: -104.9965947}, action) => {
  switch (action.type) {
  case 'SET_GPS_LOCATION':
    return action.locationType === 'main' ? action.GPS : state;
  default:
    return state;
  }
};

export const displayMainMap = (state = false, action) => {
  switch (action.type) {
  case 'DISPLAY_INDIVIDUAL_MAP':
    return action.locationType === 'main' ? action.option : state;
  default:
    return state;
  }
};

export const vincentyDistance = (state = 0, action) => {
  switch (action.type) {
  case 'SET_DISTANCE':
    return action.distance;
  default:
    return state;
  }
};

export const mapBounds = (state = {
  sw: {lat: 39.46407646387545, lng: -105.381116184375},
  ne: {lat: 40.036336300683345, lng: -104.612073215625}}, action) => {
  switch (action.type) {
  case 'SET_MAP_BOUNDS':
    return action.bounds;
  default:
    return state;
  }
};

export const gpsLocations = (state = {
  Your: {lat: 0, lng: 0},
  Friend: {lat: 0, lng: 0},
  main: {lat: 39.7508006, lng: -104.9965947}
}, action) => {
  switch (action.type) {
  case 'SET_GPS_LOCATION':
    return Object.assign({}, state, { [action.locationType]: action.GPS } );
  default:
    return state;
  }
};

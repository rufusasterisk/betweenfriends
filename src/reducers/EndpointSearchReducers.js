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

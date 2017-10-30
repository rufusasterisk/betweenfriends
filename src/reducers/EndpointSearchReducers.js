export const yourTextLocation = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION': {
    if (action.locationType === 'Your'){
      return action.location;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const friendLocation = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION': {
    if (action.locationType === 'Friend'){
      return action.location;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadYourMap = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_INDIVIDUAL_MAP': {
    if (action.mapType === 'Your') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

export const loadFriendMap = (state = false, action) => {
  switch (action.type) {
  case 'LOAD_INDIVIDUAL_MAP': {
    if (action.mapType === 'Friend') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

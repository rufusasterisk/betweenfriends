export const yourLocation = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION': {
    if (action.locationType === 'your'){
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
    if (action.locationType === 'friend'){
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
    if (action.locationType === 'your') {
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
    if (action.locationType === 'friend') {
      return action.option;
    } else {
      return state;
    }
  }
  default:
    return state;
  }
};

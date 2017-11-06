import {
  findMidpoint,
  setGPSLocation,
  getVincentyDistanceSync,
  setDistance,
  computeMapBounds,
  setBounds,
  computeMainMap } from '../actions/EndpointSearchActions';

const location1GPS = {
  lat: 39.7508006,
  lng: -104.9965947
};
const location2GPS = {
  lat: 39.76148999999999,
  lng: -104.9789844
};

describe('findMidpoint', () => {
  it('recieves 2 GPS objects then returns a GPS object at the midpoint', () => {
    const expectation = {
      lat: 39.75614529999999,
      lng: -104.98778955
    };

    expect(findMidpoint(location1GPS, location2GPS)).toEqual(expectation);
  });
});

describe('setGPSLocation', () => {
  it(`recieves a GPS object and a location type then
     returns an action object with the keys GPS and locationType`, () => {
      const expectation = {
        type: 'SET_GPS_LOCATION',
        GPS: {
          lat: 39.7508006,
          lng: -104.9965947
        },
        locationType: 'main'
      };

      expect(setGPSLocation(location1GPS, 'main')).toEqual(expectation);
    });
});

describe('getVincentyDistanceSync', () => {
  it('should be a function', () => {
    expect(typeof getVincentyDistanceSync).toEqual('function');
  });

  it(`recieves 2 GPS objects then
      returns the distance between them accurate to 0.006 meters`, () => {
      const expectedDistance = 1919.928;

      expect(getVincentyDistanceSync(location1GPS, location2GPS))
        .toEqual(expectedDistance);
    });
});

describe('setDistance', () => {
  it(`receives a float value then
        returns an action object with a key of distance`, () => {
      const expectation = {
        type: 'SET_DISTANCE',
        distance: 200
      };

      expect(setDistance(200)).toEqual(expectation);
    });
});

describe('computeMapBounds', () => {
  it(`receives a center GPS object and distance in meters then
     returns a bounds object with the NW and SE corners as GPS objects`, () => {
      const expectation = {
        ne: {
          lat: 39.76479074438441,
          lng: -104.97658628951173
        },
        sw: {
          lat: 39.747498761668744,
          lng: -104.9989900092971
        }
      };
      const centerGPS = findMidpoint(location1GPS, location2GPS);
      const distance = getVincentyDistanceSync(location1GPS, location2GPS);
      expect(computeMapBounds(centerGPS, distance)).toEqual(expectation);
    });
});

describe('setBounds', () => {
  it(`receives a bounds GPS object then
    return an action with a bounds key`, () => {
      const bounds = {
        ne: {
          lat: 39.76479074438441,
          lng: -104.97658628951173
        },
        sw: {
          lat: 39.747498761668744,
          lng: -104.9989900092971
        }
      };
      const expectation = {
        type: 'SET_MAP_BOUNDS',
        bounds: bounds
      };

      expect(setBounds(bounds)).toEqual(expectation);
    });
});

describe('computeMainMap', () => {
  it(`receives 2 GPS location objects then
    computes center and dispatches setGPSLocation with the result to main then
    computes Vincenty distance and dispatches setDistance with the result then
    uses the center and distance to compute bounds and dispatches setBounds
    with the result`, () => {
      const midpoint = findMidpoint(location1GPS, location2GPS);
      const distance = getVincentyDistanceSync(location1GPS, location2GPS);
      const bounds = computeMapBounds(midpoint, distance);
      const expectedActions = [
        setGPSLocation(midpoint, 'main'),
        setDistance(distance),
        setBounds(bounds)
      ];

      const thunked = computeMainMap(location1GPS, location2GPS);
      let dispatchedActions = [];
      const mockDispatch = (dispatchedAction) => {
        dispatchedActions.push(dispatchedAction);
      };

      thunked(mockDispatch);

      expect(dispatchedActions).toEqual(expectedActions);
    });
});

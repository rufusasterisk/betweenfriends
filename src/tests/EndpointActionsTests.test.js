import {
  setGPSLocation,
  getVincentyDistanceSync,
  setDistance,
  computeMainMap } from '../actions/EndpointSearchActions';

const location1GPS = {
  lat: 39.7508006,
  lng: -104.9965947
};
const location2GPS = {
  lat: 39.76148999999999,
  lng: -104.9789844
};

describe('setGPSLocation', () => {
  it('should return an action object', () => {
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

  it('should return a distance', () => {
    const expectedDistance = 1919.928;

    expect(getVincentyDistanceSync(location1GPS, location2GPS))
      .toEqual(expectedDistance);
  });
});

describe('setDistance', () => {
  it('returns an action with distance', () => {
    const expectation = {
      type: 'SET_DISTANCE',
      distance: 200
    };

    expect(setDistance(200)).toEqual(expectation);
  });
});

describe('computeMainMap', () => {


});

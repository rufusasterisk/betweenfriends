import { gpsLocations } from '../reducers/EndpointSearchReducers';

describe('gpsLocations Reducer', () => {
  it('is a function', () => {
    expect(typeof gpsLocations).toEqual('function');
  });

  it('returns a default state', () => {
    const mockAction = {
      type: 'undefined'
    };

    expect(gpsLocations(undefined, mockAction)).toEqual({
      your: {lat: 0, lng: 0},
      friend: {lat: 0, lng: 0},
      main: {lat: 39.7508006, lng: -104.9965947}
    });
  });

  it('updates the selected target', () => {
    let mockAction = {
      type: 'undefined'
    };

    expect(gpsLocations(undefined, mockAction)).toEqual({
      your: {lat: 0, lng: 0},
      friend: {lat: 0, lng: 0},
      main: {lat: 39.7508006, lng: -104.9965947}
    });

    mockAction = {
      type: 'SET_GPS_LOCATION',
      locationType: 'your',
      GPS: {lat: 39.46407646387545, lng: -105.381116184375}
    };

    expect(gpsLocations(undefined, mockAction)).toEqual({
      your: {lat: 39.46407646387545, lng: -105.381116184375},
      friend: {lat: 0, lng: 0},
      main: {lat: 39.7508006, lng: -104.9965947}
    });

  });
});

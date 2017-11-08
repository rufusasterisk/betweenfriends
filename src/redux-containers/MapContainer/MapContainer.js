import { connect } from 'react-redux';
import {
  setGPSLocation,
  displayMap,
  getVincentyDistance,
  computeMainMap } from '../../actions/EndpointSearchActions';
import MainMap from '../../components/MainMap/MainMap';

const mapStatetoProps = store => ({
  displayYourMap: store.displayYourMap,
  displayFriendMap: store.displayFriendMap,
  displayMainMap: store.displayMainMap,
  vincentyDistance: store.vincentyDistance,
  mapBounds: store.mapBounds,
  placesArray: store.placesArray,
  gpsLocations: store.gpsLocations
});

const mapDispatchtoProps = dispatch => ({
  setMainMapGPS: (locationGPS) => {
    dispatch(setGPSLocation(locationGPS, 'main'));
  },
  displayMap: (option) => {
    dispatch(displayMap(option, 'main'));
  },
  getVincentyDistance: (yourGPSLocation, friendGPSLocation) => {
    dispatch(getVincentyDistance(yourGPSLocation, friendGPSLocation));
  },
  computeMainMap: (location1GPS, location2GPS) => {
    dispatch(computeMainMap(location1GPS, location2GPS));
  }
});



export default connect(mapStatetoProps, mapDispatchtoProps)(MainMap);

import { connect } from 'react-redux';
import {
  setGPSLocation,
  displayMap,
  getVincentyDistance } from '../../actions/EndpointSearchActions';

import MainMap from '../../components/MainMap/MainMap';

const mapStatetoProps = store => ({
  yourGPSLocation: store.yourGPSLocation,
  friendGPSLocation: store.friendGPSLocation,
  mainGPSLocation: store.mainGPSLocation,
  displayYourMap: store.displayYourMap,
  displayFriendMap: store.displayFriendMap,
  displayMainMap: store.displayMainMap,
  center: store.mainGPSLocation,
  vincentyDistance: store.vincentyDistance
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
  }
});



export default connect(mapStatetoProps, mapDispatchtoProps)(MainMap);

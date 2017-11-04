import { connect } from 'react-redux';
import {
  setGPSLocation,
  displayMap } from '../../actions/EndpointSearchActions';

import MainMap from '../../components/MainMap/MainMap';

const mapStatetoProps = store => ({
  yourGPSLocation: store.yourGPSLocation,
  friendGPSLocation: store.friendGPSLocation,
  mainGPSLocation: store.mainGPSLocation,
  displayYourMap: store.displayYourMap,
  displayFriendMap: store.displayFriendMap,
  displayMainMap: store.displayMainMap,
  center: store.mainGPSLocation
});

const mapDispatchtoProps = dispatch => ({
  setMainMapGPS: (locationGPS) => {
    dispatch(setGPSLocation(locationGPS, 'main'));
  },
  displayMap: (option) => {
    dispatch(displayMap(option, 'main'));
  }
});



export default connect(mapStatetoProps, mapDispatchtoProps)(MainMap);

import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import {
  // updateIndividualLocation,
  // shouldLoadMap,
  getMap } from '../../actions/EndpointSearchActions';

const mapStatetoProps = store => ({
  textLocation: store.friendTextLocation,
  gpsLocation: store.gpsLocations.friend,
  loadingMap: store.loadingFriendMap,
  displayMap: store.displayFriendMap,
  loadFailure: store.loadFriendMapFailure
});

const mapDispatchtoProps = dispatch => ({
  // updateIndividualLocation: (location, locationType) => {
  //   dispatch(updateIndividualLocation(location, locationType));
  // },
  // shouldLoadMap: (option, locationType) => {
  //   dispatch(shouldLoadMap(option, locationType));
  // }
  getMap: (locationString) => {
    dispatch(getMap(locationString, 'friend'));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

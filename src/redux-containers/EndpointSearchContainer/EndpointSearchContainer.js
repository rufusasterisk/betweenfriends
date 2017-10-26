import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import {
  updateIndividualLocation,
  shouldLoadMap } from '../../actions/EndpointSearchActions';

const mapStatetoProps = store => ({
  yourLocation: store.yourLocation,
  friendLocation: store.friendLocation,
  loadYourMap: store.loadYourMap,
  loadFriendMap: store.loadFriendMap
});

const mapDispatchtoProps = dispatch => ({
  updateIndividualLocation: (location, locationType) => {
    dispatch(updateIndividualLocation(location, locationType));
  },
  shouldLoadMap: (option, mapType) => {
    dispatch(shouldLoadMap(option, mapType));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

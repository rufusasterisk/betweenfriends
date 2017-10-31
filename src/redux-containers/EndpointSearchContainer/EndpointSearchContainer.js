import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import {
  updateIndividualLocation,
  shouldLoadMap } from '../../actions/EndpointSearchActions';

console.log('endpoint container:', this.props);

const mapStatetoProps = store => ({
  yourTextLocation: store.yourTextLocation,
  friendLocation: store.friendLocation,
  loadYourMap: store.loadYourMap,
  loadFriendMap: store.loadFriendMap
});

const mapDispatchtoProps = dispatch => ({
  updateIndividualLocation: (location, locationType) => {
    dispatch(updateIndividualLocation(location, locationType));
  },
  shouldLoadMap: (option, locationType) => {
    dispatch(shouldLoadMap(option, locationType));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

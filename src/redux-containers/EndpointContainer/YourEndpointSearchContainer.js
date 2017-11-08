import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import {
  // updateIndividualLocation,
  // shouldLoadMap,
  getMap } from '../../actions/EndpointSearchActions';

const mapStatetoProps = store => ({
  textLocation: store.yourTextLocation,
  gpsLocation: store.gpsLocations.your,
  loadingMap: store.loadingYourMap,
  displayMap: store.displayYourMap,
  loadFailure: store.loadYourMapFailure
});

const mapDispatchtoProps = dispatch => ({
  // updateIndividualLocation: (locationString) => {
  //   dispatch(updateIndividualLocation(locationString, 'Your'));
  // },
  getMap: (locationString) => {
    dispatch(getMap(locationString, 'your'));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

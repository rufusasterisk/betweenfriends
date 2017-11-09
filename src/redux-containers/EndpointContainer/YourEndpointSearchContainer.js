import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import { getMap } from '../../actions/EndpointSearchActions';

const mapStatetoProps = store => ({
  textLocation: store.yourTextLocation,
  gpsLocation: store.gpsLocations.your,
  loadingMap: store.loadingYourMap,
  displayMap: store.displayYourMap,
  loadFailure: store.loadYourMapFailure
});

const mapDispatchtoProps = dispatch => ({
  getMap: (locationString) => {
    dispatch(getMap(locationString, 'your'));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

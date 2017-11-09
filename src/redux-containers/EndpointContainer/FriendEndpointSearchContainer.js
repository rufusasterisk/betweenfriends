import { connect } from 'react-redux';
import EndpointSearch from '../../components/EndpointSearch/EndpointSearch';
import { getMap } from '../../actions/EndpointSearchActions';

const mapStatetoProps = store => ({
  textLocation: store.friendTextLocation,
  gpsLocation: store.gpsLocations.friend,
  loadingMap: store.loadingFriendMap,
  displayMap: store.displayFriendMap,
  loadFailure: store.loadFriendMapFailure
});

const mapDispatchtoProps = dispatch => ({
  getMap: (locationString) => {
    dispatch(getMap(locationString, 'friend'));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EndpointSearch);

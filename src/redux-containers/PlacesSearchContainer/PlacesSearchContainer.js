import { connect } from 'react-redux';
import { submitPlacesSearch } from '../../actions/PlacesSearchActions';
import PlacesSearch from '../../components/PlacesSearch/PlacesSearch';

const mapStatetoProps = store => ({
  mainGPSLocation: store.gpsLocations.main,
  vincentyDistance: store.vincentyDistance,
  searched: store.placesArray.length > 0

});
const mapDispatchtoProps = dispatch => ({
  submitPlacesSearch: (searchString, center, radius) => {
    dispatch(submitPlacesSearch(searchString, center, radius));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PlacesSearch);

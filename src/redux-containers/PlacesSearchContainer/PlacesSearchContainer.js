import { connect } from 'react-redux';
import { submitPlacesSearch } from '../../actions/PlacesSearchActions';
import PlacesSearch from '../../components/PlacesSearch/PlacesSearch';

const mapStatetoProps = store => ({
  mainGPSLocation: store.mainGPSLocation,
  vincentyDistance: store.vincentyDistance

});
const mapDispatchtoProps = dispatch => ({
  submitPlacesSearch: (searchString, center, radius) => {
    dispatch(submitPlacesSearch(searchString, center, radius));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PlacesSearch);

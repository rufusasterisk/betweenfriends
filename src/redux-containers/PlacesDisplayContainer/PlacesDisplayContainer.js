import { connect } from 'react-redux';
import { PlacesDisplay } from '../../components/PlacesDisplay/PlacesDisplay';

const mapStatetoProps = store => ({
  placesArray: store.placesArray,
  selectedID: store.selectedID
});

const mapDispatchtoProps = dispatch => ({
  
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PlacesDisplay);

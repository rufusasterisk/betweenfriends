import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MyMapComponent from '../MyGoogleMap/MyGoogleMap';

export default class MainMap extends Component {

  componentWillReceiveProps(nextProps) {
    if ( nextProps.displayYourMap && nextProps.displayFriendMap &&
    (nextProps.gpsLocations.your !== this.props.gpsLocations.your ||
       nextProps.gpsLocations.friend !== this.props.gpsLocations.friend) ){
      this.updateStatus(nextProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  updateStatus(nextProps) {
    this.props.computeMainMap(nextProps.gpsLocations.your,
      nextProps.gpsLocations.friend);
    this.props.displayMap(true);
  }

  render() {
    return (
      <section className='main-map'>
        <MyMapComponent
          defaultZoom={11}
          isMarkerShown={this.props.displayMainMap}
          vincentyDistance={this.props.vincentyDistance}
          displayYourMap={this.props.displayYourMap}
          displayFriendMap={this.props.displayFriendMap}
          mapBounds={this.props.mapBounds}
          placesArray={this.props.placesArray}
          gpsLocations={this.props.gpsLocations}/>
      </section>
    );
  }
}

MainMap.propTypes = {
  displayYourMap: PropTypes.bool,
  displayFriendMap: PropTypes.bool,
  displayMainMap: PropTypes.bool,
  setMainMapGPS: PropTypes.func,
  displayMap: PropTypes.func,
  getVincentyDistance: PropTypes.func,
  vincentyDistance: PropTypes.number,
  computeMainMap: PropTypes.func,
  mapBounds: PropTypes.object,
  placesArray: PropTypes.array,
  gpsLocations: PropTypes.object
};

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MyMapComponent from '../MyGoogleMap/MyGoogleMap';

export default class MainMap extends Component {

  componentWillReceiveProps(nextProps) {
    if ( nextProps.displayYourMap && nextProps.displayFriendMap &&
    (nextProps.yourGPSLocation !== this.props.yourGPSLocation ||
       nextProps.friendGPSLocation !== this.props.friendGPSLocation) ){
      this.updateStatus(nextProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  updateStatus(nextProps) {
    this.props.computeMainMap(nextProps.yourGPSLocation,
      nextProps.friendGPSLocation);
    this.props.displayMap(true);
  }

  render() {
    return (
      <section className='main-map'>
        <MyMapComponent
          isMarkerShown={this.props.displayMainMap}
          center={this.props.center}
          vincentyDistance={this.props.vincentyDistance}
          yourGPSLocation={this.props.yourGPSLocation}
          displayYourMap={this.props.displayYourMap}
          friendGPSLocation={this.props.friendGPSLocation}
          displayFriendMap={this.props.displayFriendMap}
          mapBounds={this.props.mapBounds}
          placesArray={this.props.placesArray}/>
      </section>
    );
  }
}

MainMap.propTypes = {
  yourGPSLocation: PropTypes.object,
  friendGPSLocation: PropTypes.object,
  mainGPSLocation: PropTypes.object,
  displayYourMap: PropTypes.bool,
  displayFriendMap: PropTypes.bool,
  displayMainMap: PropTypes.bool,
  setMainMapGPS: PropTypes.func,
  displayMap: PropTypes.func,
  center: PropTypes.object,
  getVincentyDistance: PropTypes.func,
  vincentyDistance: PropTypes.number,
  computeMainMap: PropTypes.func,
  mapBounds: PropTypes.object,
  placesArray: PropTypes.array
};

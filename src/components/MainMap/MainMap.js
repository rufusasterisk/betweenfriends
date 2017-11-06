import React, { Component } from 'react';
// import PlacesSearch from '../PlacesSearch/PlacesSearch';
import { PropTypes } from 'prop-types';
// import { apiKey } from '../../utilities/apiKey';
import MyMapComponent from '../MyGoogleMap/MyGoogleMap';

export default class MainMap extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
    // if (this.props.displayYourMap && this.props.displayFriendMap) {
    // const mainMapGPSObject = {
    //   lat: (nextProps.yourGPSLocation.lat +
    //     nextProps.friendGPSLocation.lat)/2,
    //   lng: (nextProps.yourGPSLocation.lng +
    //     nextProps.friendGPSLocation.lng)/2
    // };
    // this.props.setMainMapGPS(mainMapGPSObject);
    // this.props.getVincentyDistance(
    //   nextProps.yourGPSLocation,
    //   nextProps.friendGPSLocation);
    this.props.computeMainMap(nextProps.yourGPSLocation,
      nextProps.friendGPSLocation);
    this.props.displayMap(true);
    // }
  }

  // renderMap() {
  //   if (this.props.displayMainMap) {
  //     return (
  //       <iframe
  //         width="800"
  //         height="600"
  //         frameBorder="0" style={{border: 0}}
  //         src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=
  //         ${this.props.mainGPSLocation.lat},
  //         ${this.props.mainGPSLocation.lng}&zoom=18`}
  //         title={`CenterLocationMap`}>
  //       </iframe>
  //     );
  //   } else {
  //     return;
  //   }
  // }

  render() {
    return (
      <section className='main-map'>
        {/* {this.renderMap()} */}
        <MyMapComponent
          isMarkerShown={this.props.displayMainMap}
          center={this.props.center}
          vincentyDistance={this.props.vincentyDistance}
          yourGPSLocation={this.props.yourGPSLocation}
          displayYourMap={this.props.displayYourMap}
          friendGPSLocation={this.props.friendGPSLocation}
          displayFriendMap={this.props.displayFriendMap}
          mapBounds={this.props.mapBounds}/>
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
  mapBounds: PropTypes.object
};

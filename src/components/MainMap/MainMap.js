import React, { Component } from 'react';
import PlacesSearch from '../PlacesSearch/PlacesSearch';
import { PropTypes } from 'prop-types';
import { apiKey } from '../../utilities/apiKey';

export default class MainMap extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if ( (nextProps.displayYourMap && nextProps.displayFriendMap) &&
    (nextProps.displayYourMap !== this.props.displayYourMap ||
       nextProps.displayFriendMap !== this.props.displayFriendMap) ){
      this.updateStatus();
    }
  }

  updateStatus() {
    // if (this.props.displayYourMap && this.props.displayFriendMap) {
    const mainMapGPSObject = {
      lat: (this.props.yourGPSLocation.lat +
        this.props.friendGPSLocation.lat)/2,
      lng: (this.props.yourGPSLocation.lng +
        this.props.friendGPSLocation.lng)/2
    };
    this.props.setMainMapGPS(mainMapGPSObject);
    this.props.displayMap(true);
    // }
  }

  renderMap() {
    if (this.props.displayMainMap) {
      return (
        <iframe
          width="800"
          height="600"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=
          ${this.props.mainGPSLocation.lat}, ${this.props.mainGPSLocation.lng}&zoom=18`}
          title={`CenterLocationMap`}>
        </iframe>
      );
    } else {
      return;
    }
  }

  // <div>pp</div>

  render() {
    return (
      <section className='main-map'>
        <PlacesSearch
          submitPlacesSearch={ ()=>{}} />
        {/* MAIN MAP COMPONENT */}
        {this.renderMap()}
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
  displayMap: PropTypes.func
};

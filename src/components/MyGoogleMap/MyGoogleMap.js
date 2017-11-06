import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle} from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { apiKey } from '../../utilities/apiKey';


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?
      key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div />,
    mapElement: <div
      style={{ height: `100%` }}
      className={'my-google-map'}
      id={'map'}/>
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 39.7392358, lng: -104.990251 }}
    center={props.center}
    ref={(map) => {
      console.log(map);
      if (props.isMarkerShown && map) {
        const variance = props.vincentyDistance/2000000;
        console.log(variance);
        const mapBoundsLiteral = {
          east: props.mapBounds.ne.lng - variance,
          north: props.mapBounds.ne.lat - variance,
          south: props.mapBounds.sw.lat + variance,
          west: props.mapBounds.sw.lng + variance
        };
        map.fitBounds(mapBoundsLiteral);
        console.log(mapBoundsLiteral);
        console.log(map.getBounds());
      // console.log(props.mapBounds);q
      }

    }}
  >
    {props.isMarkerShown &&
      <Circle
        center={props.center}
        radius={props.vincentyDistance/2} /> }
    {props.isMarkerShown &&
      <Marker
        position={{lat: props.mapBounds.ne.lat, lng: props.mapBounds.ne.lng}}
        label={'NorthEast bound'} /> }
    {props.isMarkerShown &&
      <Marker
        position={{lat: props.mapBounds.sw.lat, lng: props.mapBounds.sw.lng}}
        label={'SouthWest bound'} /> }
    {props.displayYourMap &&
      <Marker
        position={props.yourGPSLocation}
        label="Your Location"/> }
    {props.displayFriendMap &&
      <Marker
        position={props.friendGPSLocation}
        label="Friend Location" /> }
    {props.isMarkerShown &&
      <Marker
        position={props.center}
        label="Center" /> }
  </GoogleMap>
);

MyMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool,
  yourGPSLocation: PropTypes.object,
  friendGPSLocation: PropTypes.object,
  center: PropTypes.object,
  vincentyDistance: PropTypes.number,
  displayYourMap: PropTypes.bool,
  displayFriendMap: PropTypes.bool,
  mapBounds: PropTypes.object
};

export default MyMapComponent;

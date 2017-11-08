import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { apiKey } from '../../utilities/apiKey';

const buildMarkers = (placesArray) => {
  return placesArray.map( (place) => {
    return (<Marker
      key={place.id}
      position={place.geometry.location}
      label={place.name} />);
  });
};

const MyMapComponent = compose(
  withProps({
    // eslint-disable-next-line max-len
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
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
    defaultZoom={props.defaultZoom}
    center={props.gpsLocations.main}
    ref={(map) => {
      if (props.isMarkerShown && map) {
        const variance = props.vincentyDistance/2000000;
        // console.log(variance);
        const mapBoundsLiteral = {
          east: props.mapBounds.ne.lng - variance,
          north: props.mapBounds.ne.lat - variance,
          south: props.mapBounds.sw.lat + variance,
          west: props.mapBounds.sw.lng + variance
        };
        map.fitBounds(mapBoundsLiteral);
        // console.log(mapBoundsLiteral);
        // console.log(map.getBounds());
      // console.log(props.mapBounds);
      }
    }}>
    {props.isMarkerShown &&
      <Circle
        center={props.gpsLocations.main}
        radius={props.vincentyDistance/2}
        defaultOptions={{fillColor: 'transparent'}}/> }
    {props.displayYourMap &&
      <Marker
        position={props.gpsLocations.your}
        label="Your Location"
        defaultOptions={
          {icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}/> }
    {props.displayFriendMap &&
      <Marker
        position={props.gpsLocations.friend}
        label="Friend Location"
        defaultOptions={
          {icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'}}/> }
    {props.placesArray.length > 0 &&
      buildMarkers(props.placesArray)}
    {/* {props.isMarkerShown &&
      <Marker
        position={props.center}
        label="Center" /> }
    {props.isMarkerShown &&
      <Marker
        position={{lat: props.mapBounds.ne.lat, lng: props.mapBounds.ne.lng}}
        label={'NorthEast bound'} /> }
    {props.isMarkerShown &&
      <Marker
        position={{lat: props.mapBounds.sw.lat, lng: props.mapBounds.sw.lng}}
        label={'SouthWest bound'} /> } */}
  </GoogleMap>
);

MyMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool,
  vincentyDistance: PropTypes.number,
  displayYourMap: PropTypes.bool,
  displayFriendMap: PropTypes.bool,
  mapBounds: PropTypes.object,
  gpsLocations: PropTypes.object,
  defaultZoom: PropTypes.number
};

export default MyMapComponent;

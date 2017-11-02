import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div />,
    mapElement: <div
      style={{ height: `100%` }}
      className={'my-google-map'}/>
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

MyMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool
};

export default MyMapComponent;

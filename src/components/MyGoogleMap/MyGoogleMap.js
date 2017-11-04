import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { apiKey } from '../../utilities/apiKey';


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
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
    defaultZoom={11}
    defaultCenter={{ lat: 39.7392358, lng: -104.990251 }}
    center={props.center}>
    {props.isMarkerShown && <Marker position={props.center} />}
  </GoogleMap>
);

MyMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool
};

export default MyMapComponent;

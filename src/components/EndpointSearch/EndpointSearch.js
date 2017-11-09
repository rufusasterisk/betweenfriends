import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { apiKey, embedAPIKey } from '../../utilities/apiKey';
// import { embedAPIKey } from '../../utilities/apiKey';

export default class EndpointSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchField: event.target.value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || (this.state = nextState);
  }

  getData(event) {
    event.preventDefault();
    this.props.getMap(this.state.searchField);
  }

  renderMap() {
    if (this.props.displayMap) {
      const myThing = compose(
        withProps({
          // eslint-disable-next-line max-len
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div />,
          mapElement: <div
            style={{ height: `100%` }}
            className={'side-google-map'}
            id={`${this.props.locationType}map`}/>
        }),
        withScriptjs,
        withGoogleMap
      )((props) =>
        <div>
          <GoogleMap
            defaultZoom={14}
            center={props.gpsLocation}>
            <Marker
              position={props.gpsLocation}
              label={`${props.textLocation}`}
              defaultOptions={{
                // color: 'green'
              }}
            />
          </GoogleMap>
        </div>);
      return  myThing(this.props);
    }
  }


  render() {
    return (
      <article
        className={`${this.props.className}${this.props.displayMap ?
          ' entered' : ''}`}>
        <form>
          <h2>{this.props.locationType}<span> Location</span></h2>
          <input
            onChange={this.handleChange}
            value={this.state.searchField} />
          <button
            onClick={this.getData}>Find Location</button>
        </form>
        {this.renderMap()}
      </article>
    );
  }
}

EndpointSearch.propTypes = {
  className: PropTypes.string,
  locationType: PropTypes.string,
  textLocation: PropTypes.string,
  gpsLocation: PropTypes.object,
  loadingMap: PropTypes.bool,
  displayMap: PropTypes.bool,
  loadFailure: PropTypes.bool,
  getMap: PropTypes.func
};

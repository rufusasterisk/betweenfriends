import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiKey } from '../../utilities/apiKey';

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

  getData() {
    this.props.getMap(this.state.searchField);
  }

  renderMap() {
    if (this.props.displayMap) {
      return (
        <iframe
          width="400"
          height="300"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=
          ${this.props.textLocation}`}
          title={`${this.props.locationType}LocationMap`}>
        </iframe>
      );
    }
  }

  render() {
    return (
      <article
        className={`${this.props.className}${this.props.displayMap ? ' entered' : ''}`}>
        <h2>{this.props.locationType} Location</h2>
        <input
          onChange={this.handleChange}
          value={this.state.searchField} />
        <button
          onClick={this.getData}>Find Location</button>
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

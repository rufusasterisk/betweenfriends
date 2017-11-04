import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { embedAPIKey } from '../../utilities/apiKey';

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
      return (
        <iframe
          width="300"
          height="200"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${embedAPIKey}&q=
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

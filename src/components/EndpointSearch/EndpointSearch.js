import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from '../../utilities/apiKey';

export default class EndpointSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      shouldRenderMap: false,
      queryLocation: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(event) {
    console.log('handleChange!!');
    console.log(this.state);
    this.setState({
      searchField: event.target.value
    });
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log(this.props);
  //   console.log(nextProps);
  //   return this.props !== nextProps;
  // }

  getData() {
    // if ( this.state.searchField === '') {
    //   alert("please enter a value");
    //   return;
    // }

    // this.setState({
    //   shouldRenderMap: true,
    //   queryLocation: this.state.searchField
    // });
    this.props.updateIndividualLocation(
      this.state.searchField, this.props.locationType
    );
    this.props.shouldLoadMap(true, this.props.locationType);
    console.log(this.props);
  }

  renderMap() {
    // if (this.state.dataRequest) {
    //   return (<h4>Loading...</h4>);
    // }
    // if (this.state.dataFailure) {
    //   return (<h4>There was a problem with your request.</h4>);
    // }
    if (this.state[`load${this.props.locationType}Map`]) {
      return (
        <iframe
          width="400"
          height="300"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
            &q=${this.state.queryLocation}`}
          title="YourLocationMap">
        </iframe>
      );
    }
  }

  render() {
    return (
      <article
        className={this.props.className}>
        <h2>{this.props.locationType} Location</h2>
        <input
          onChange={this.handleChange}
          value={this.state.searchField} />
        <button
          onClick={this.getData} > Find Location </button>
        {this.renderMap()}
      </article>
    );
  }
}

EndpointSearch.propTypes = {
  className: PropTypes.string,
  locationType: PropTypes.string,
  updateIndividualLocation: PropTypes.func,
  shouldLoadMap: PropTypes.func
};

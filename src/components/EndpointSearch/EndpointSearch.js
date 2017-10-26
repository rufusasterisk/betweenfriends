import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EndpointSearch extends Component {
  constructor (props) {
    super (props)
    this.state = {
      searchField: '',
      shouldRenderMap: false,
      queryLocation: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchField: event.target.value,
    });
  }

  getData() {
    // if ( this.state.searchField === '') {
    //   alert("please enter a value");
    //   return;
    // }
    this.setState({
      shouldRenderMap: true,
      queryLocation: this.state.searchField
    })
  }

  renderMap() {
    if (this.state.dataRequest) {
      return (<h4>Loading...</h4>);
    }
    if (this.state.dataFailure) {
      return (<h4>There was a problem with your request.</h4>);
    }
    if (this.state.shouldRenderMap) {
      return (
        <iframe
          width="400"
          height="300"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAs63HJ3WYKWwiofrl8UNh8fSa9lIUVT8w
            &q=${this.state.queryLocation}`}
          title="YourLocationMap">
      </iframe>)
    }
  }

  render() {
    return (
      <article
        className={this.props.className}>
          <h2>{this.props.searchTitle}</h2>
          <input
            onChange={this.handleChange}
            value={this.state.searchField} />
          <button
            onClick={this.getData} > Find Location </button>
          {this.renderMap()}
      </article>
    )
  }
}

EndpointSearch.propType = {
  className: PropTypes.string,
  searchTitle: PropTypes.string
}

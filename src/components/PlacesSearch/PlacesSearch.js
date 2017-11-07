import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlacesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      extraRadius: '0'
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(this.props);
    this.setState({
      searchField: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.submitPlacesSearch(this.state.searchField,
      this.props.mainGPSLocation, this.props.vincentyDistance/2);
  }

  handleRadio(event) {
    this.setState({
      extraRadius: event.target.value
    });
  }

  render() {
    return (
      <article
        className='places-search'>
        <form>
          <h2 className='places-header'>What&apos;s
            <span> Between Friends?</span></h2>
          <input
            onChange={this.handleChange}
            value={this.state.searchField} />
          <button
            onClick={this.handleClick}
            value={'Search!'}>Search!</button>
          {/* <div className={'radio-container'}>
            <h5>Extra Radius</h5>
            <label>
              <input
                checked={this.state.extraRadius === '0'}
                name='extraRadius'
                onChange={this.handleRadio}
                type='radio'
                value='0' /> 0 ft
            </label>
            <label>
              <input
                checked={this.state.extraRadius === '0.1'}
                name='extraRadius'
                onChange={this.handleRadio}
                type='radio'
                value='0.1' /> 500 ft
            </label>
            <label>
              <input
                checked={this.state.extraRadius === '0.5'}
                name='extraRadius'
                onChange={this.handleRadio}
                type='radio'
                value='0.5' /> 0.5 mi
            </label>
            <label>
              <input
                checked={this.state.extraRadius === '1'}
                name='extraRadius'
                onChange={this.handleRadio}
                type='radio'
                value='1' /> 1 mi
            </label>
          </div> */}
        </form>
      </article>
    );
  }
}

PlacesSearch.propTypes = {
  submitPlacesSearch: PropTypes.func,
  mainGPSLocation: PropTypes.object,
  vincentyDistance: PropTypes.number
};

import React, { Component } from 'react';
import locationCleaner from '../../utilities/locationCleaner';

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
    this.setState({
      searchField: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.submitPlacesSearch({

    });
    console.log(locationCleaner(this.state.searchField));
  }

  handleRadio(event) {
    this.setState({
      extraRadius: event.target.value
    });
  }


  render() {
    return (
      <form
        className='places-search'>
        <input
          onChange={this.handleChange}
          onClick={this.props.submitPlacesSearch}
          value={this.state.searchField} />
        <h4>Extra Radius</h4>
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
        <button
          onClick={this.handleClick}
          value={'Search!'}>Search!</button>
      </form>
    );
  }
}

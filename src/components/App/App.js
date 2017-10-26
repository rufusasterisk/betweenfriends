import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EndpointSearch from '../EndpointSearch/EndpointSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EndpointSearch
          className={'your-location'}
          searchTitle={'Your Location'} />
        <EndpointSearch
          className={'friend-location'}
          searchTitle={`Friend's Location`} />
      </div>
    );
  }
}

export default App;

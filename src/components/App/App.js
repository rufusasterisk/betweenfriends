import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EndpointSearch from '../EndpointSearch/EndpointSearch';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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

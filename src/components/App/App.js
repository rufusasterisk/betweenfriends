import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EndpointSearchContainer from
  '../../redux-containers/EndpointSearchContainer/EndpointSearchContainer';
import Header from '../Header/Header';
import PlacesSearch from '../PlacesSearch/PlacesSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EndpointSearchContainer
          className={'your-location'}
          locationType={'Your'} />
        <EndpointSearchContainer
          className={'friend-location'}
          locationType={`Friend`} />
        <PlacesSearch
          submitPlacesSearch={ ()=>{}} />
      </div>
    );
  }
}

export default App;

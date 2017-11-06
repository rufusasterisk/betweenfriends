import React, { Component } from 'react';
import './App.css';
import YourEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/YourEndpointSearchContainer';
import FriendEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/FriendEndpointSearchContainer';
import PlacesSearchContainer from
  '../../redux-containers/PlacesSearchContainer/PlacesSearchContainer';
import Header from '../Header/Header';
import MapContainer from '../../redux-containers/MapContainer/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <YourEndpointSearchContainer
            className={'your-location'}
            locationType={'Your'} />
          <FriendEndpointSearchContainer
            className={'friend-location'}
            locationType={`Friend`} />
          <PlacesSearchContainer />
          <MapContainer />
        </main>
      </div>
    );
  }
}

export default App;

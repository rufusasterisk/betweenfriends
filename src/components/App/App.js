import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import EndpointSearchContainer from
//   '../../redux-containers/EndpointSearchContainer/EndpointSearchContainer';
import YourEndpointSearchContainer from
  '../../redux-containers/EndpointSearchContainer/YourEndpointSearchContainer';
import FriendEndpointSearchContainer from
  '../../redux-containers/EndpointSearchContainer/FriendEndpointSearchContainer';

import Header from '../Header/Header';
// import PlacesSearch from '../PlacesSearch/PlacesSearch';
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
          <MapContainer />
          {/* <PlacesSearch
                submitPlacesSearch={ ()=>{}} /> */}
        </main>
      </div>
    );
  }
}

export default App;

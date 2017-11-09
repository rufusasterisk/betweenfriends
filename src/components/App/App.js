import React, { Component } from 'react';
import './App.css';
import YourEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/YourEndpointSearchContainer';
import FriendEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/FriendEndpointSearchContainer';
import PlacesSearchContainer from
  '../../redux-containers/PlacesSearchContainer/PlacesSearchContainer';
import Header from '../Header/Header';
import MainMapContainer from
  '../../redux-containers/MainMapContainer/MainMapContainer';

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
          <MainMapContainer />
        </main>
      </div>
    );
  }
}

export default App;

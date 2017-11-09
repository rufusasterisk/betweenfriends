import React, { Component } from 'react';
import './App.css';
import YourEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/YourEndpointSearchContainer';
import FriendEndpointSearchContainer from
  '../../redux-containers/EndpointContainer/FriendEndpointSearchContainer';
import PlacesSearchContainer from
  '../../redux-containers/PlacesSearchContainer/PlacesSearchContainer';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainMapContainer from
  '../../redux-containers/MainMapContainer/MainMapContainer';
import PlacesDisplayContainer from
  '../../redux-containers/PlacesDisplayContainer/PlacesDisplayContainer';


class App extends Component {
  buildClassList() {
    let classString = "App";
    if (this.props.displayYourMap) {
      classString += ' your-entered';
    }
    if (this.props.displayFriendMap) {
      classString += ' friend-entered';
    }
    if (this.props.displayMainMap) {
      classString += ' main-entered';
    }
    if (this.props.displayPlaces) {
      classString += ' places-entered';
    }
    return classString;
  }

  render() {
    return (
      <div className={this.buildClassList()}>
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
          <PlacesDisplayContainer />
        </main>
      </div>
    );
  }
}

const mapStatetoProps = store => ({
  displayYourMap: store.displayYourMap,
  displayFriendMap: store.displayFriendMap,
  displayMainMap: store.displayMainMap,
  displayPlaces: (store.placesArray).length > 0
});

export default connect(mapStatetoProps, undefined)(App);

App.propTypes = {
  displayYourMap: PropTypes.bool,
  displayFriendMap: PropTypes.bool,
  displayMainMap: PropTypes.bool,
  displayPlaces: PropTypes.bool
};

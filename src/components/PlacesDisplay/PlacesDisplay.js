import React from 'react';
import PropTypes from 'prop-types';
import './PlacesDisplay.css';

export const PlacesDisplay = (props) => {

  const renderOpen = (place) => {
    if (place.opening_hours === undefined) {
      return (<h5></h5>);
    }
    const status = place.opening_hours.open_now ?
      'open' : 'closed';
    return (
      <h5>Currently: <span
        className={status}>{status.toUpperCase()}</span></h5>
    );
  };

  const generateCards = () => {
    return props.placesArray.map( (place) => {

      return (
        <article
          className='places-card'
          key={place.id}>
          <h3>{place.name}</h3>
          <p>{place.vicinity}</p>
          <div className={'card-detail-container'}>
            <div
              className={`rating ${place.rating}`}>
              Rating: {place.rating || 'N/A'}</div>
            {renderOpen(place)}
          </div>
        </article>
      );
    });
  };

  const conditionalRender = () => {
    //eslint-disable-next-line react/prop-types
    if (props.placesArray.length > 0) {
      return (
        <section
          className={`places-display show-cards`}>
          <h2>Places</h2>
          <div className={'card-container'}>
            {generateCards()}
          </div>
        </section>
      );
    } else {
      return (
        <section
          className={`places-display`}>
        </section>
      );
    }
  };

  return conditionalRender();
};

PlacesDisplay.propTypes = {
  placesArray: PropTypes.array,
  selectedID: PropTypes.string
};

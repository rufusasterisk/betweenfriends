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

  // <h5>Currently: <span
  //   className={status}>{status.toUpperCase()}</span></h5>

  const generateCards = () => {
    return props.placesArray.map( (place) => {

      return (
        <article
          className='places-card'
          key={place.id}>
          <h3>{place.name}</h3>
          <p>{place.vicinity}</p>
          <div
            className={`rating ${place.rating}`}>
            Rating: {place.rating || 'N/A'}</div>
          {renderOpen(place)}
        </article>
      );
    });
  };

  const conditionalRender = () => {
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

const dummyData =  {
  "geometry" : {
    "location" : {
      "lat" : 39.74948649999999,
      "lng" : -104.994834
    },
    "viewport" : {
      "northeast" : {
        "lat" : 39.75073443029149,
        "lng" : -104.9936123197085
      },
      "southwest" : {
        "lat" : 39.74803646970849,
        "lng" : -104.9963102802915
      }
    }
  },
  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
  "id" : "5af3a1769f7beb6767cb479caab5db73b5bc5890",
  "name" : "Starbucks",
  "opening_hours" : {
    "open_now" : false,
    "weekday_text" : []
  },
  "photos" : [
    {
      "height" : 289,
      "html_attributions" : [
        // eslint-disable-next-line max-len
        "\u003ca href=\"https://maps.google.com/maps/contrib/116821905570981051130/photos\"\u003eStarbucks\u003c/a\u003e"
      ],
      // eslint-disable-next-line max-len
      "photo_reference" : "CmRaAAAAZL05V8l5WTv-2PSSlHi8FTf97bb5Uv3BkcO_9ua7c_Pb3I4gTZ1XgPG4TKbaAxu_dStLAh8KZ43FKbG87k7Xa7MDaewzvj-pr60iQ2-lPJBSImfN8BhueSxvsMHEMbKWEhBwmuULQSXl3QwqYx9_vck9GhT88qSWTc9A8g-D5MJhZEv9OuXKOw",
      "width" : 512
    }
  ],
  "place_id" : "ChIJiS2e29p4bIcRf0BcEUP-kmc",
  "price_level" : 2,
  "rating" : 4.2,
  // eslint-disable-next-line max-len
  "reference" : "CmRRAAAA5x5xE1aRrUf6CUf_h7V-YkK27USdORskleia4Vy6XIamEEnbddHIMtSPW8EUTRdSoVooMouO125IzblS5W3_yAmib4gAdMSCC6FwiZMrPlOOseV-kCaLesUHux_hN4pfEhAOwi2VS9lmDznpdTYoEJfdGhSugRuAGAMihtSf833kCPXEGVvsWg",
  "scope" : "GOOGLE",
  // eslint-disable-next-line array-bracket-spacing
  "types" : [ "cafe", "food", "store", "point_of_interest", "establishment" ],
  "vicinity" : "1125 17th Street, Denver"
};

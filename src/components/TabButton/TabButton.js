import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabButton extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <button>click me!</button>
    );
  }
}

TabButton.propTypes = {
  isExpanded: PropTypes.bool
};

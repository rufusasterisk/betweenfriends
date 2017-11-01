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
      <button
        className={this.props.className}>
        {this.props.title}</button>
    );
  }
}

TabButton.propTypes = {
  isExpanded: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string
};

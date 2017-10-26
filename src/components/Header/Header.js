import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';
import TabButton from '../TabButton/TabButton';

const Header = () => {

  return (
    <header>
      <h1>Between<span>Friends</span></h1>
      <TabButton
        className={"Create User"} />
    </header>
  );
};

export default Header;

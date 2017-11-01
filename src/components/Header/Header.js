import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';
import TabButton from '../TabButton/TabButton';

const Header = () => {

  return (
    <header>
      <h1>Between<span>Friends</span></h1>
      <div className={'tab-container'}>
        <TabButton
          className={"sign-up"}
          title={'Sign Up'} />
        <TabButton
          className={"login"}
          title={'Login'} />
      </div>
    </header>
  );
};

export default Header;

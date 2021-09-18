import React from 'react';
import './Header.css';
import { logo } from '@assets';

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="headerLogo" alt="logo" />
      {/* insert your project name 
      and change project name in package.json */}
      <p>Insert here </p>
    </div>
  );
};

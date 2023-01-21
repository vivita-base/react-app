import React from 'react';
import './logo.scss';

const Logo = ({options}) => {
  options = (options)?options:"";
  return (
    <div className={"logo-c "+options}>
      <span className="vivita">VIVITA</span>
      <span className="base">BASE</span>
    </div>
  );

};

export default Logo;
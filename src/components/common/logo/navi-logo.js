import React from 'react';
import './navi-logo.scss';
import { Link } from 'react-router-dom';
import Logo from './logo';

const NaviLogo = ({toggleWidth}) => {

  return (
    <div className={"navi-logo"}>
      <Link to="/">
        <Logo options={"white "+((toggleWidth)?"tiny-not-mobile":"")}/>
      </Link>
    </div>
  );

};

export default NaviLogo;
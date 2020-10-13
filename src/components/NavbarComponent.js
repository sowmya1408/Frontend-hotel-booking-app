import React from "react";
import {Link} from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div className="nav">
      <img src="/w-hotels-1.svg" alt="hotel-logo" />
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/book'>Book Now</Link></button>
    </div>
  );
};

export default NavbarComponent;

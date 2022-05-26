import React from "react";
import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div className="header__container">
      <div className="header__content">
        <img src={logo} alt="logo typeface" className="header__logo"></img>
      </div>
    </div>
  );
};

export default Navbar;

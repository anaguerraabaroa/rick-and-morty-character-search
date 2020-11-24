import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/header__logo.png";
import header from "../images/header__image.gif";

const Header = () => {
  return (
    <header className="header" role="banner">
      <Link to="/">
        <div className="header__wrapper">
          <img
            src={logo}
            alt="Rick and Morty logo"
            title="Rick and Morty logo"
            className="header__wrapper--logo"
          />
          <img
            src={header}
            alt="Rick and Morty image"
            title="Rick and Morty image"
            className="header__wrapper--image"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./sass/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link exact to="/home">
        <figure className="header__logo">
          <img
            src="https://storage.googleapis.com/sspe-rscs-prod-cont/00000B2A/es-PE/images/logo/458a6759-8b79-46c8-9ba4-c9de36520e06.png"
            alt=""
          />
        </figure>
      </Link>
    </header>
  );
};

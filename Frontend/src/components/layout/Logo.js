import React from "react";
import { Link } from "react-router-dom";
import LogoPng from "../../media/images/logo.png";

const Logo = () => {
  return (
    <div className="logo logoVii mt-lg-1">
      <Link to="/">
        <img
          src={LogoPng}
          className="img-fluid"
          alt="Muzze || Art &amp; History Museum"
        ></img>
      </Link>
    </div>
  );
};

export default Logo;

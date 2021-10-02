import React from "react";
import { Link } from "react-router-dom";

export const MnAdress = () => {
  return (
    <address className="mndAdress position-absolute text-gray888 mb-0">
      <strong className="d-block mb-1 mndaTitle font-weight-normal fontSerif text-graydfdfdf">
        Hours
      </strong>
      <p className="mb-5">
        <time dateTime="2011-01-12">Daily 9.30 am–6.00 pm</time>
      </p>
      <strong className="d-block mndaTitle font-weight-normal mb-1 fontSerif text-graydfdfdf">
        Location
      </strong>
      <p className="mb-5">2270 S Real Camino Lake California, US 90967</p>
      <Link to="/visit#directions" className="mndLink text-uppercase">
        <i className="fas fa-map-marker-alt icn" aria-hidden="true">
          <span className="sr-only">icon</span>
        </i>
        Geting Here
      </Link>
    </address>
  );
};

export default MnAdress;

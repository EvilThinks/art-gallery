import React from "react";
import { Link } from "react-router-dom";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";

function Rentals() {
  return (
    <VisitTwoColumnBlock id="rental" title="Rentals">
      <p className="mb-10">
        Our team offers unique event spaces that can accommodate a wide range of
        events and group sizes. Members of any level can utilize our numerous
        indoor spaces or sprawling 40,000-square-foot garden for festivals, film
        shoots, galas, conferences, screenings, dinners, weddings, and a host of
        other occasions. Please fill out our facility inquiry form so we may
        better understand your needs and be prepared.
      </p>
      <div className="vtcBtnsWrap d-flex flex-wrap mx-n2 mb-3">
        <Link
          to="facility-rental"
          className="btn btnGre5 btnGre5Outline bdr2 mx-2"
        >
          View Rental Packages{" "}
          <i className="fa fa-angle-right align-middle icn" aria-hidden="true">
            <span className="sr-only">icon</span>
          </i>
        </Link>
      </div>
      <div className="vtcBtnsWrap d-flex flex-wrap mx-n2 mb-3">
        <Link
          to="facility-rental#request"
          className="btn btnGre5 btnGre5Outline bdr2 mx-2"
        >
          Request a Rental{" "}
          <i className="fa fa-angle-right align-middle icn" aria-hidden="true">
            <span className="sr-only">icon</span>
          </i>
        </Link>
      </div>
    </VisitTwoColumnBlock>
  );
}

export default Rentals;

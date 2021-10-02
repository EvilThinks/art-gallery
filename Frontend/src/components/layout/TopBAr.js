import React from "react";
import { Link } from "react-router-dom";

const TopBAr = ({ scrollRef }) => {
  return (
    <div
      className="htTopBar htTopBarVvi bg-secondary py-1 py-md-2"
      ref={scrollRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <time className="hthTime d-none d-md-block" dateTime="2011-01-12">
              <i
                className="far fa-clock icn text-brown align-middle mr-1"
                aria-hidden="true"
              ></i>
              Open Daily 9:30–6:00, Monday Until 8:00
            </time>
          </div>
          <div className="col-12 col-md-7">
            <ul className="list-unstyled httbLinks httbLinksVvi d-flex flex-wrap justify-content-center justify-content-md-end w-100 mb-0">
              <li>
                <Link to="/tickets">Buy Tickets</Link>
              </li>
              <li>
                <Link to="/profile">Membership</Link>
              </li>
              <li>
                <Link to="/about/facilityrental">Facility Rental</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBAr;

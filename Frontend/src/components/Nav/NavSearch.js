import React, { useState } from "react";

const NavSearch = () => {
  const [isAriaExpanded, toogleAria] = useState(false);
  return (
    <form action="#" className="hdSearchForm">
      <a
        className="hdSearchOpener hdSearchOpenerVii d-block"
        data-toggle="collapse"
        href="/"
        role="button"
        aria-expanded={isAriaExpanded}
        aria-controls="hdSearchFieldCollapse"
        onClick={(e) => {
          e.preventDefault();
          toogleAria(!isAriaExpanded);
        }}
      >
        <i className="icomoon-search">
          <span className="sr-only">search</span>
        </i>
      </a>
      <div
        className={`collapse hdSearchFieldCollapse position-fixed w-100 h-100 d-flex align-items-center ${
          isAriaExpanded ? "show" : ""
        }`}
        id="hdSearchFieldCollapse"
      >
        <div className="hdsfcHolder w-100 mx-auto py-4 px-3">
          <strong className="d-block font-weight-normal mb-2">
            Type anything to Find in Pages
          </strong>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search…"
            ></input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="icomoon-search">
                  <span className="sr-only">search</span>
                </i>
              </button>
            </div>
          </div>
        </div>
        <a
          className="hdSearchClose d-flex align-items-center justify-content-center position-absolute"
          data-toggle="collapse"
          href="/"
          role="button"
          aria-expanded="true"
          aria-controls="hdSearchFieldCollapse"
          onClick={(e) => {
            e.preventDefault();
            toogleAria(!isAriaExpanded);
          }}
        >
          <i className="fas fa-times" aria-hidden="true">
            <span className="sr-only">search</span>
          </i>
        </a>
      </div>
    </form>
  );
};

export default NavSearch;

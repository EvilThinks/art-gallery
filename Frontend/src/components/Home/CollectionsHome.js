import React from "react";
import { Link } from "react-router-dom";
import Collections from "../Collections/Collections";

const CollectionsHome = () => {
  return (
    <section className="collectionsBlock pt-6 pt-md-11 pt-lg-16 pt-xl-21 pb-6 pb-md-10 pb-lg-14 pb-xl-20">
      <div className="container">
        <header className="topHeadingHead text-center mb-7 mb-lg-11">
          <strong className="tpHeadingTitle text-uppercase font-weight-normal d-block mb-2 mb-md-5">
            Art works &amp; Objects
          </strong>
          <h1>Explore the Collection</h1>
        </header>
        <Collections></Collections>
        <footer className="btnWrap text-center">
          <Link
            to="/collections"
            className="btn btnGre5 btnGre5Outline bdr2 btnLgMinWidth"
          >
            Explore All Collections
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default CollectionsHome;

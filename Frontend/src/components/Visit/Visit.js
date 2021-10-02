import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { directionsData } from "../../componentConfigs/visitAccordeonData";
import { grouptoursData } from "../../componentConfigs/grouptoursData";
import prices from "../../componentConfigs/prices.json";
import MainHeadingHead from "../layout/headers/MainHeadingHead";
import Hours from "./Hours";
import Directions from "./Directions";
import Accessability from "./Accessibility";
import GroupTours from "./GroupTours";
import Rentals from "./Rentals";
import Facilities from "./Facilities";

const ScrollToNavLink = ({ to, children }) => {
  const handleClick = (e) => {
    const { hash } = e.target;
    handleScroll(hash);
  };
  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

const handleScroll = (hash) => {
  const targetNode = document.querySelector(hash);
  if (!targetNode) return;
  const top = targetNode.offsetTop - 91; //height of nav tab
  window.scrollTo({ top: top, behavior: "smooth" });
};

const Visit = ({ links, location }) => {
  useEffect(() => {
    if (location.hash) handleScroll(location.hash);
  });

  return (
    <main>
      <MainHeadingHead
        backgroundImage={"url(http://placehold.it/1920x300)"}
        title={"Plan your Visit"}
      ></MainHeadingHead>

      <nav className="scrollToNav text-gray777 pt-2 pb-2 pt-lg-4 pb-lg-4">
        <div className="container">
          <ul className="list-unstyled mb-0 d-flex justify-content-start">
            {links.length &&
              links.map(({ path, title }, index) => {
                return (
                  <li
                    key={index}
                    className={path.indexOf(location.hash) > 0 ? "active" : ""}
                  >
                    <ScrollToNavLink to={path}>{title}</ScrollToNavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
      <div className="container pt-7 pb-7 pt-lg-13 pb-lg-10 pt-xl-20 pb-xl-14">
        <Hours prices={prices}></Hours>
        <Directions directionsData={directionsData}></Directions>
        <Accessability></Accessability>
        <GroupTours grouptoursData={grouptoursData}></GroupTours>
        <Rentals></Rentals>
        <Facilities></Facilities>
      </div>
    </main>
  );
};

export default Visit;

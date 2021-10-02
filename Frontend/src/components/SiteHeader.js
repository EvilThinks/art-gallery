import React, {  useEffect, useState, useRef } from "react";
import Navbar, { SideNavBar } from "./Nav/Navbar";
import { navs } from "../componentConfigs/navLinks";
import Logo from "./layout/Logo";
import TopBAr from "./layout/TopBAr";
import NavBarToogler from "./Nav/NavBarToogler";
import SideNavBarToogler from "./Nav/SideNavBarToogler";
import NavSearch from "./Nav/NavSearch";

export default (props) => {
  const [isFixed, toogleFixed] = useState(false);
  const [deviceWidth, setWidth] = useState(
    document.body.getBoundingClientRect().width
  );
  const scrollRef = useRef(null);
  const handleScroll = () => {
    toogleFixed(
      scrollRef.current.getBoundingClientRect().top <=
        0 - scrollRef.current.getBoundingClientRect().height
    );
  };
  const handleResize = () => {
    setWidth(document.body.getBoundingClientRect().width);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll",handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="phStickyWrap phVii w-100">
      <header id="pageHeader" className="position-absolute w-100 bg-white">
        <TopBAr scrollRef={scrollRef}></TopBAr>
        <div
          className={`hdHolder headerFixer border-bottom ${
            isFixed ? "fixedPosition" : ""
          }`}
          style={
            isFixed
              ? {
                  width: `${deviceWidth}px`,
                  position: "fixed",
                  top: "0px",
                  left: "0px",
                }
              : {}
          }
        >
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light d-block px-0 pt-2 pb-2 pt-md-2 pb-md-2 pt-lg-4 pb-lg-5">
              <div className="row">
                <div className="col-5 col-sm-3 col-lg-2">
                  <Logo></Logo>
                </div>
                <div className="col-7 col-sm-9 col-lg-10 position-static d-flex justify-content-end pt-lg-1">
                  <div
                    className="navbar-collapse pageNavigationCollapse pageNavigationCollapseVii justify-content-md-end collapse"
                    id="pageNavigationCollapse"
                  >
                    <Navbar navList={navs} location={props.location}></Navbar>
                  </div>
                  <div className="d-flex align-items-center ml-3 ml-lg-6">
                    <NavSearch></NavSearch>
                    <SideNavBarToogler></SideNavBarToogler>
                    <NavBarToogler></NavBarToogler>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <SideNavBar navList={navs} location={props.location}></SideNavBar>
      </header>
    </div>
  );
};

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MnAdress } from "../layout/MnAdress";
const CustomComponents = {
  mnAdress: <MnAdress></MnAdress>,
};

const MnDropList = ({ children, list, customChild }) => {
  return (
    <>
      <ul className="list-unstyled mnDropList mb-0 pt-1 pb-1 pt-md-4 pb-md-6">
        {list.map(({ path, title, childs }, index) => (
          <li key={index} className={childs.length > 0 ? "hasDropdown" : ""}>
            <Link to={path}>{title}</Link>
            {childs.length > 0 &&
              children &&
              React.cloneElement(children, { list: childs })}
          </li>
        ))}
      </ul>
      {CustomComponents[customChild]}
    </>
  );
};
const DropDownMenu = (props) => {
  const { showRef } = props;
  return (
    <div
      ref={showRef}
      className="dropdown-menu mndDropMenu mndDropMenuSmall p-0"
    >
      <MnDropList {...props}></MnDropList>
    </div>
  );
};

const MainNavigationElem = ({
  title,
  path,
  childs,
  customChild,
  children,
  location,
}) => {
  const showRef = useRef();
  const [visible, setVisible] = useState(false);
  const isActive =
    path === location.pathname
      ? true
      : childs.filter(
          ({ path }) =>
            location.pathname !== "/" && path.indexOf(location.pathname) >= 0
        ).length;
  return (
    <li
      className={`nav-item dropdown ${isActive ? "active" : ""}${
        visible ? " show" : ""
      }`}
    >
      <Link
        className="nav-link"
        to={path}
        onClick={(e) => {
          if (!path) {
            e.preventDefault();
            showRef.current.classList.toggle("show");
            setVisible(!visible);
          }
        }}
      >
        {title}
      </Link>
      {childs.length > 0 &&
        children &&
        React.cloneElement(children, {
          list: childs,
          showRef: showRef,
          customChild: customChild,
        })}
    </li>
  );
};
const MainNavigation = ({ list, children, location }) => {
  return (
    <>
      <ul className="navbar-nav mainNavigation mainNavigationVii text-capitalize">
        {list.map((props, index) => {
          return (
            <MainNavigationElem
              key={index}
              children={children}
              location={location}
              {...props}
            ></MainNavigationElem>
          );
        })}
      </ul>
    </>
  );
};

const SideNavigation = ({ list, children, location }) => {
  const handleouterClick = (e) => {
    const innerClick = e.path.filter((elem) => elem.tagName === "NAV");
    if (!innerClick.length) {
      document.body.classList.remove("hdSideMenuActive");
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleouterClick);
    return () => {
      window.removeEventListener("click", handleouterClick);
    };
  });
  return (
    <nav className="navbar navbar-light d-flex flex-column navbarSide position-fixed h-100 px-6 pt-10 pb-6 px-md-10 pb-md-10">
      <ul className="navbar-nav mainNavigation w-100 flex-grow-1 mainSideNavigation text-capitalize d-block">
        {list.map(({ ...props }, index) => {
          return (
            <MainNavigationElem
              key={index}
              children={children}
              location={location}
              {...props}
              customChild={null}
            ></MainNavigationElem>
          );
        })}
      </ul>
      <div className="nvbBottomWrap w-100 flex-shrink-0 text-gray888 pt-10 pb-1">
        <address className="mb-0">
          <p>
            <a
              href="tel:16179876543"
              className="colorInherit textDecorationNone"
            >
              1 (617) 987-6543
            </a>
            <br></br>
            <a
              href="mailto:info@museumwp.com"
              className="colorInherit textDecorationNone"
            >
              info@museumwp.com
            </a>
          </p>
          <ul className="list-unstyled socialNetworks ftSocialNetworks ftSocialNetworksVix d-flex flex-wrap mb-2 mt-11">
            <li>
              <a href="/">
                <i className="fab fa-twitter" aria-hidden="true">
                  <span className="sr-only">twitter</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-pinterest" aria-hidden="true">
                  <span className="sr-only">pinterest</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-facebook-f" aria-hidden="true">
                  <span className="sr-only">facebook</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-instagram" aria-hidden="true">
                  <span className="sr-only">instagram</span>
                </i>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled ftTermLinks ftTermLinksVix d-flex flex-wrap mb-0">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </address>
      </div>
      <a
        href="/"
        className="hdMenuOpener hdSideMenuOpener position-absolute"
        onClick={(e) => {
          e.preventDefault();
          document.body.classList.remove("hdSideMenuActive");
        }}
      >
        <span className="icnBar position-absolute">
          <span className="sr-only">menu</span>
        </span>
      </a>
    </nav>
  );
};

export const SideNavBar = ({ navList, location }) => {
  return (
    <SideNavigation list={navList} location={location}>
      <DropDownMenu>
        <MnDropList></MnDropList>
      </DropDownMenu>
    </SideNavigation>
  );
};

export default ({ navList, children, location }) => {
  return (
    <>
      <MainNavigation list={navList} location={location}>
        <DropDownMenu>
          <MnDropList></MnDropList>
        </DropDownMenu>
      </MainNavigation>
      {children}
    </>
  );
};

import { Dropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
const ExhiTabList = ({ items, location, history }) => {
  return (
    <ul
      className="nav nav-tabs justify-content-center exhiTabList exhiTabListIII mt-4 mt-lg-8 pb-8"
      role="tablist"
    >
      {items.length &&
        items.map(({ filterName, ...props }, index) => {
          return (
            <ExhiTabListItem
              key={index}
              location={location}
              history={history}
              {...props}
            >
              {filterName}
            </ExhiTabListItem>
          );
        })}
    </ul>
  );
};

const ExhiTabListItem = ({ children, items, location, queryName, history }) => {
  return (
    <Dropdown as="li" bsPrefix="nav-item dropdown">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        bsPrefix="dropdown-menu py-0 bg-secondary fltDropdown"
      >
        {items.length &&
          items.map(({ name, id }, index) => {
            return (
              <CustomMenuItem
                key={index}
                id={id}
                location={location}
                q={queryName}
                history={history}
              >
                {`${name}`}
              </CustomMenuItem>
            );
          })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    className="nav-link dropdown-toggle"
    data-toggle="dropdown"
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <i className="fas fa-angle-down icn">
      <span className="sr-only">icon</span>
    </i>
  </a>
));
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {React.Children.toArray(children)}
      </div>
    );
  }
);

const CustomMenuItem = ({
  handleLink,
  id,
  children,
  location,
  q,
  history,
  ...props
}) => {
  const searchParams = new URLSearchParams(location.search);
  const isMatch = searchParams.get(q) === id;
  if (isMatch) {
    searchParams.delete(q);
  } else {
    searchParams.set(q, id);
  }
  const path = `${location.pathname + "?" + searchParams.toString()}`;
  return (
    <Link
      className={`dropdown-item ${isMatch ? "active" : ""}`}
      data-toggle="tab"
      to={location.pathname + `?${q}=${id}`}
      role="tab"
      onClick={(e) => {
        e.preventDefault();
        history.replace(path);
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ExhiTabList;

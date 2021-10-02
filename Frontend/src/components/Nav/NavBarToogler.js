import React, { useRef, useState } from "react";

const NavBarToogler = () => {
  const [ariaExpanded, toogleAria] = useState(false);
  return (
    <button
      className="navbar-toggler pgNavOpener pgNavOpenerVii position-absolute collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#pageNavigationCollapse"
      aria-controls="pageNavigationCollapse"
      aria-expanded={ariaExpanded}
      aria-label="Toggle navigation"
      onClick={(e) => {
        document
          .querySelector("#pageNavigationCollapse")
          .classList.toggle("show");
        toogleAria(!ariaExpanded);
      }}
    >
      <span className="navbar-toggler-icon">
        <span className="sr-only">menu</span>
      </span>
    </button>
  );
};

export default NavBarToogler;

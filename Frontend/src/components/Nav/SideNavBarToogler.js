import React from "react";

const SideNavBarToogler = () => {
  return (
    <a
      href="/"
      className="hdMenuOpener hdSideMenuOpener position-relative ml-4 d-none d-md-block"
      onClick={(e) => {
        e.preventDefault();
        document.body.classList.toggle("hdSideMenuActive");
      }}
    >
      <span className="icnBar position-absolute">
        <span className="sr-only">menu</span>
      </span>
    </a>
  );
};

export default SideNavBarToogler;

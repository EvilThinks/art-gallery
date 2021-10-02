import React from "react";

export default ({ onClick }) => (
  <a
    href="/"
    className="btn laodMore btn-outline-light bdr2 btnMidMinWidth"
    onClick={(e) => {
      e.preventDefault();
      onClick()
    }}
  >
    Load more
  </a>
);

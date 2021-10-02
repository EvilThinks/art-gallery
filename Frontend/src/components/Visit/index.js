import React from "react";
import Visit from "./Visit";
import { navs } from "../../componentConfigs/navLinks";
import { withRouter } from "react-router-dom";

const withLinks = (Component) => () => (
  <Component links={navs[1].childs}></Component>
);

export default withLinks(withRouter(Visit));

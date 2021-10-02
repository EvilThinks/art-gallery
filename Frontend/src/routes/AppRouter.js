import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/layout/NotFound";
import SiteHeader from "../components/SiteHeader.js";
import Footer from "../components/layout/Footer";
import PageInDevelopment from "../components/layout/PageInDevelopment";
import Visit from "../components/Visit";
import CollectionsRoute from "./CollectionsRoute";

class AppRouter extends Component {
  componentDidUpdate() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  render() {
    return (
      <>
        <SiteHeader {...this.props}></SiteHeader>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/events" component={PageInDevelopment}></Route>
          <Route exact path="/exibitions" component={PageInDevelopment}></Route>
          <Route exact path="/visit" component={Visit}></Route>
          <Route exact path="/about" component={PageInDevelopment}></Route>
          <Route exact path="/collections" component={CollectionsRoute}></Route>
          <Route exact path="/artists" component={PageInDevelopment}></Route>
          <Route exact path="/shop" component={PageInDevelopment}></Route>
          <Route exact path="/venues" component={PageInDevelopment}></Route>
          <Route exact path="/faq" component={PageInDevelopment}></Route>
          <Route exact path="/auth" component={PageInDevelopment}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default withRouter(AppRouter);

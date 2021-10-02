import React from "react";
import ExhiTabList from "../components/Collections/ExhiTabList";
import collectionsTabList from "../componentConfigs/collectionsTabList.json";
import Collections from "../components/Collections/Collections";

function CollectionsRoute({ location, history }) {
  return (
    <section className="exhibitionBlock pt-6 pb-6 pt-md-9 pb-md-9 pt-lg-11 pb-lg-13 pt-xl-21 pb-xl-22">
      <div className="container">
        <header className="topHeadingHead text-center mb-4">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <h1 className="h1Large mb-4">Collections</h1>
              <div className="fontSerif eabDescrText eabDescrTextII">
                <p>
                  This sub content title section you can add you real content
                  whatever.
                </p>
              </div>
            </div>
          </div>
          <ExhiTabList
            items={collectionsTabList}
            location={location}
            history={history}
          ></ExhiTabList>
        </header>
        <Collections></Collections>
      </div>
    </section>
  );
}

export default CollectionsRoute;

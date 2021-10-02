import React, { useEffect, useState } from "react";
import { getCollections } from "../../api";
import { CollectionColumnHover } from "../layout/CollectionColumn";
import Masonry from "react-masonry-component";
import { Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const masonryOptions = {
  transitionDuration: 500,
};

function Collections({ location }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      try {
        const collectionsData = await getCollections(location.search);
        console.log(collectionsData)
        setData(collectionsData);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchCollections();
  }, [location]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {!data.length > 0 && !loading && <h2>there is no content</h2>}
        {!data.length && loading && (
          <Spinner animation="grow" variant="secondary"></Spinner>
        )}
      </div>
      <div
        className="tab-pane fade show active"
        id="current"
        role="tabpanel"
        aria-labelledby="current-tab"
        style={{ position: "relative" }}
      >
        <Masonry
          options={masonryOptions}
          className="row makeItMasonery mx-xl-n4"
        >
          {data.length > 0 &&
            data.map((data, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 mimItem px-xl-4"
                >
                  <CollectionColumnHover data={data}></CollectionColumnHover>
                </div>
              );
            })}
        </Masonry>
        {loading && <Loader></Loader>}
      </div>
    </>
  );
}

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0.75",
        backgroundColor: "white",
        top: 0,
        left: 0,
      }}
    ></div>
  );
};

export default withRouter(Collections);

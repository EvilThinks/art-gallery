import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CurrentExibitHome = ({ data }) => {
  const { imageUrl, imageDesc, time, type, title, path } = data;
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <article className="currExibitColumn mb-6 mx-auto">
        <div className="imgHolder mb-3 mb-lg-6">
          <Link to={path}>
            <img
              src={imageUrl}
              className="img-fluid w-100 d-block"
              alt={imageDesc}
            ></img>
          </Link>
        </div>
        <strong className="catagoryTitle d-block font-weight-normal text-uppercase mb-2">
          {type}
        </strong>
        <h2 className="mb-3">
          <Link to={path}>{title}</Link>
        </h2>
        <time dateTime={time} className="d-block cecTime text-gray777">
          {time}
        </time>
      </article>
    </div>
  );
};
const CurrentExibitHomeSkeleton = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <article className="currExibitColumn mb-6 mx-auto">
        <div className="imgHolder mb-3 mb-lg-6">
          <Skeleton height={270} width={365}></Skeleton>
        </div>
        <strong className="catagoryTitle d-block font-weight-normal text-uppercase mb-2">
          <Skeleton width={70}></Skeleton>
        </strong>
        <h2 className="mb-3">
          <a href="single-exhibition.html">
            <Skeleton></Skeleton>
          </a>
        </h2>
        <time className="d-block cecTime text-gray777">
          <Skeleton width={150}></Skeleton>
        </time>
      </article>
    </div>
  );
};

const CurrentExibitionsHome = ({ exhibitions }) => {
  return (
    <section className="currentExibitionBlock hasBdr pt-6 pt-md-9 pt-lg-14 pt-xl-20 pb-6 pb-lg-10 pb-xl-16">
      <div className="container">
        <header className="teeSideHead mb-6 mb-lg-11">
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <h1 className="text-capitalize mb-0">Currently Onview</h1>
            </div>
            <div className="col-12 col-md-4 text-right">
              <Link
                to="/exhibitions"
                className="d-none d-md-inline-block  align-top teeSeeAllBtn mt-2"
              >
                See All Exhibitions
                <i className="icomoon-arrowCircleRight align-middle icn ml-1">
                  <span className="sr-only">icon</span>
                </i>
              </Link>
            </div>
          </div>
        </header>
        <div className="row">
          {!exhibitions.length && (
            <>
              <CurrentExibitHomeSkeleton></CurrentExibitHomeSkeleton>
              <CurrentExibitHomeSkeleton></CurrentExibitHomeSkeleton>
              <CurrentExibitHomeSkeleton></CurrentExibitHomeSkeleton>
            </>
          )}
          {exhibitions.length > 0 &&
            exhibitions.map((exhibition, index) => {
              return (
                <CurrentExibitHome
                  key={index}
                  data={exhibition}
                ></CurrentExibitHome>
              );
            })}
        </div>
        <div className="btnWrap text-center">
          <Link
            to="/exhibitions"
            className="d-inline-block d-md-none align-top teeSeeAllBtn mt-2"
          >
            See All Exhibitions{" "}
            <i className="icomoon-arrowCircleRight align-middle icn ml-1">
              <span className="sr-only">icon</span>
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentExibitionsHome;

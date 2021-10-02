import React from "react";
import { Link } from "react-router-dom";

const SupportUsBlock = ({ items }) => {
  return (
    <section className="supportUsBlock hasBdr bg-grayf8f8f8 pt-6 pb-1 pt-md-11 pb-md-5 pt-lg-16 pb-lg-10 pt-xl-22 pb-xl-16">
      <div className="container">
        <div className="row">
          {items.map(({ icon, title, path, linkTitle, description },index) => (
            <div key={index} className="col-12 col-md-4">
              <article className="subFeatureColumn text-center mb-6 px-xl-6">
                <span className="icnWrap animItVi d-flex align-items-center mb-3 mb-lg-7">
                  <span className="d-block w-100">
                    <img
                      src={icon}
                      width="78"
                      height="85"
                      className="img-fluid"
                      alt="icon"
                    ></img>
                  </span>
                </span>
                <h2 className="mb-2 mb-lg-4">{title}</h2>
                <p className="mb-4 mb-lg-7">{description}</p>
                <Link
                  to={path}
                  className="btn btn-outline-dark align-top btnMdMinWidth bdr2"
                >
                  {linkTitle}
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportUsBlock;

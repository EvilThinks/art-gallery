import React from "react";
import { Link } from "react-router-dom";
import NotFoundIcon from "../../media/images/icn16.svg";
const PageInDevelopment = () => {
  return (
    <article className="pageNotFoundBlock hdIsVii d-flex w-100 text-center">
      <div className="lbAlignWrap d-flex align-items-center w-100">
        <div className="container py-6">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
              <div className="extraWrap px-md-12">
                <i className="icnWrap d-block mb-5">
                  <img
                    src={NotFoundIcon}
                    width="72"
                    height="73"
                    alt="icon"
                  ></img>
                </i>
                <h2 className="mb-3">Ohh! Page in Development</h2>
                <p className="mb-7">
                  Currently this Page in Development. Click the button below to
                  return home.
                </p>
                <Link
                  to="/"
                  className="btn btn-secondary text-uppercase btnMdMinWidth"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PageInDevelopment;

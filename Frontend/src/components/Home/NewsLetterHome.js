import React from "react";
const NewsLetterHome = () => {
  return (
    <aside className="newsletterAside text-center pt-6 pb-6 pt-md-8 pb-md-8 pt-lg-13 pb-lg-13 pt-xl-21 pb-xl-20">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <header className="topHeadingHead mb-5 mb-md-10">
              <strong className="tpHeadingTitle text-uppercase font-weight-normal d-block mb-3 mb-md-6">
                Stay in Touch
              </strong>
              <h2>
                Join our email list and be the first to know about special
                events and more!
              </h2>
            </header>
          </div>
        </div>
        <form action="#">
          <div className="form-row justify-content-center mx-n2">
            <div className="form-group px-2 mb-2">
              <input
                type="text"
                className="form-control d-block"
                placeholder="Your Name"
              ></input>
            </div>
            <div className="form-group px-2 mb-2">
              <input
                type="email"
                className="form-control d-block"
                placeholder="Your Email Address"
              ></input>
            </div>
            <div className="form-group px-2 mb-2">
              <input 
                type="submit"
                className="btn btn-secondary text-uppercase"
                value="sign up!"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default NewsLetterHome;

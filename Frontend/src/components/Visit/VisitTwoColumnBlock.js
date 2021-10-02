import React from "react";

function VisitTwoColumnBlock({ children, leftChildren, id, title }) {
  return (
    <>
      <section id={id} className="vistiTwoColumn">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pr-md-5 pr-lg-10 pr-xl-17">
              <h2 className="h2Medium mb-4 mb-md-7 mb-lg-10">{title}</h2>
              {leftChildren}
            </div>
          </div>
          <div className="col-12 col-md-6 pt-md-2">{children}</div>
        </div>
      </section>
      <hr className="my-8 my-lg-14"></hr>
    </>
  );
}

export default VisitTwoColumnBlock;

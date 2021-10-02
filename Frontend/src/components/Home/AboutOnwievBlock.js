import React from "react";

const AboutOnwievBlock = () => {
  return (
    <article className="aboutOnviewBlock hasBdr bg-grayf8f8f8 pt-6 pb-6 pt-md-10 pb-md-10 pt-lg-16 pb-lg-16 pt-xl-20 pb-xl-20">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <header className="headHeading">
              <h2 className="h2Medium">Read About Our Institution</h2>
            </header>
          </div>
          <div className="col-12 col-md-8">
            <div className="decrTextMedium fontSerif">
              <p>
                Founded in 1965 as an educational institution based in london,
                The Art &amp; History Museum is committed to producing
                distinctive exhibitions and public programming on Asian art.
              </p>
            </div>
            <hr className="my-4 my-lg-7"></hr>
            <h3 className="h3Small fontBase fwMedium mb-5">On View at Museum</h3>
            <ul className="list-unstyled bulletList listHasColumns text-gray777 mb-0">
              <li>Middle Eastern Art</li>
              <li>Artifacts and Antiquities</li>
              <li>Traditional Art</li>
              <li>Western &amp; Non-Western cultures</li>
              <li>Photography</li>
              <li>Emerging Design</li>
              <li>East Asian Art</li>
              <li>War History</li>
              <li>Latin American Art</li>
              <li>Gardens</li>
              <li>20th Century Design</li>
              <li>Contemporary Design</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutOnwievBlock;

import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Carousel = ({ items = [] }) => {
  console.log(items);
  return (
    <BootstrapCarousel bsPrefix="">
      {!items.length && (
        <div style={{ height: "900px", backgroundColor: "#999" }}></div>
      )}
      {Array.isArray(items)&& items.map(({ imageUrl, date, title, path }, index) => {
        return (
          <BootstrapCarousel.Item key={index}>
            <img className="d-block w-100" src={imageUrl}></img>
            <BootstrapCarousel.Caption bsPrefix="">
              <strong className="d-block fontSerif mainHeadingTitle font-weight-normal mb-4">
                Currently Onview -<time dateTime={date}>{date}</time>
              </strong>
              <h1 className="text-white ibbHeading mb-8">{title}</h1>
              <Link
                to={path}
                className="btn btn-dark btnDarkInverse align-top btnMdMinWidth"
              >
                View Detail's
              </Link>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        );
      })}
    </BootstrapCarousel>
  );
};

export default Carousel;

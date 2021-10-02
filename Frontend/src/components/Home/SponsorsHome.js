import React from "react";
import Slider from "react-slick";

const slickSettings = {
  className: "logosSlider text-center",
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  centerPadding: "0px",
  speed: 500,
  arrows: false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

const SponsorsHome = ({sponsors=[1, 2, 3, 4, 5, 6, 7]}) => {
  return (
    <aside className="sponsorsAside bg-secondary text-white pt-5 pb-5 pt-md-8 pb-md-8 pt-lg-13 pb-lg-13 pt-xl-20 pb-xl-19">
      <div className="container">
        <header className="topHeadingHead mb-6 mb-md-9 mb-lg-14">
          <strong className="tpHeadingTitle text-uppercase font-weight-normal d-block mb-3">
            Part of the Museum
          </strong>
          <h2 className="h2Medium text-white">Our Partners &amp; Sponsers</h2>
        </header>
        <Slider {...slickSettings}>
          {sponsors.map((elem, index) => (
            <div key={index}style={{ width: "100%", display: "inline-block" }}>
              <div
                key={index}
                className="spLogoWrap w-100 d-flex align-items-center"
              >
                <span className="d-block w-100 px-3">
                  <img
                    src="http://placehold.it/150x100"
                    className="img-fluid"
                    alt="dilly"
                  ></img>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </aside>
  );
};

export default SponsorsHome;

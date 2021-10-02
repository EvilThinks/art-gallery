import React from "react";
import logo_dark from "../../media/images/logo-dark.png";

export default () => {
  return (
    <div className="ftAreaWrap bg-secondary text-gray888">
      <aside className="footerAside pt-6 pb-md-3 pt-md-7 pb-lg-5 pt-lg-10 pt-xl-15 pb-xl-13 text-center text-md-left">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-6">
              <div className="ftLogo mt-1 mx-auto mx-md-0">
                <a href="/">
                  <img
                    src={logo_dark}
                    className="img-fluid"
                    alt="Muzze || Art &amp; History Museum"
                  ></img>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-6">
              <h3 className="text-white mb-4">Address</h3>
              <address className="ftAdr mb-2 mb-md-5">
                2270 S Real Camino Lake California, US 90967
              </address>
              <a href="#" className="ftPinLink text-uppercase">
                <i className="fas fa-map-marker-alt icn">
                  <span className="sr-only">icon</span>
                </i>
                Geting Here
              </a>
            </div>
            <div className="col-12 col-md-3 mb-6">
              <h3 className="text-white mb-4">Hours</h3>
              <time dateTime="2011-01-12" className="d-block mb-3">
                Daily 9.30 am–6.00 pm
              </time>
              <strong className="font-weight-normal d-block svTitle">
                Café Service
              </strong>
              <time dateTime="2011-01-12" className="d-block">
                Daily 10.00 am–7.00 pm
              </time>
            </div>
            <div className="col-12 col-md-3 mb-6">
              <h3 className="text-white mb-4">Contact Us</h3>
              <ul className="list-unstyled ftContactList mb-0 mb-md-3">
                <li>
                  <a href="tel:&#049;&#054;&#049;&#055;&#057;&#056;&#055;&#054;&#053;&#052;&#051;">
                    1 (617) 987-6543
                  </a>
                </li>
                <li>
                  <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#109;&#117;&#115;&#101;&#117;&#109;&#119;&#112;&#046;&#099;&#111;&#109;">
                    &#105;&#110;&#102;&#111;&#064;&#109;&#117;&#115;&#101;&#117;&#109;&#119;&#112;&#046;&#099;&#111;&#109;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <footer
        id="pageFooter"
        className="bg-dark text-gray777 text-center pt-6 pb-3 pt-lg-11 pb-lg-9"
      >
        <div className="container">
          <ul className="list-unstyled socialNetworks ftSocialNetworks d-flex flex-wrap justify-content-center mb-4">
            <li>
              <a href="/">
                <i className="fab fa-twitter">
                  <span className="sr-only">twitter</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-pinterest">
                  <span className="sr-only">pinterest</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-facebook-f">
                  <span className="sr-only">facebook</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-instagram">
                  <span className="sr-only">instagram</span>
                </i>
              </a>
            </li>
          </ul>
          <p className="mb-2">
            Museum Template - <a href="/">Mad UX</a> &copy; 2020. All
            Rights Reserved
          </p>
          <ul className="list-unstyled ftTermLinks d-flex flex-wrap justify-content-center">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

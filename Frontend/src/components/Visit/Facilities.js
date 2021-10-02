import React from "react";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";

const ShopPostColumn = ({ children, imgUrl, url }) => (
  <article
    className="shopPostColumn position-relative d-flex bgCover w-100 mb-8"
    style={{ backgroundImage: `url(${imgUrl})` }}
  >
    <a
      href={url}
      target="_blank"
      className="spcAlignHolder textDecorationNone d-flex w-100 align-items-end position-relative"
    >
      <div className="my-5 mx-6 w-100">
        <h3 className="mb-0 fontBase text-white">{children}</h3>
      </div>
    </a>
  </article>
);

function Facilities() {
  return (
    <VisitTwoColumnBlock id="other" title="Amenities & Other Facilities">
      <p className="mb-6">
        We want you to be part of our museums, experience its beauty and this is
        why we offer several ways to let you engage with us to help maintain and
        develop the museums visitors experience.
      </p>
      <p className="mb-11">
        For general questions and questions about accessibility, please email us
        at{" "}
        <a
          href="mailto:info@art&historymuseum.org"
          className="text-secondary textDecorationNone"
        >
          info@art&historymuseum.org
        </a>
      </p>
      <ShopPostColumn url="/" imgUrl="http://placehold.it/585x200">
        Museum Cafe
      </ShopPostColumn>
      <ShopPostColumn url="/" imgUrl="http://placehold.it/585x200">
        Museum Shop
      </ShopPostColumn>
    </VisitTwoColumnBlock>
  );
}

export default Facilities;

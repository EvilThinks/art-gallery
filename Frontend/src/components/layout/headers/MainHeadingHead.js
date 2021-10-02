import React from "react";

function MainHeadingHead({ backgroundImage, title }) {
  return (
    <header
      className="mainHeadingHead position-relative bgCover w-100 d-flex text-white"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="mhhAlignHolder d-flex w-100 align-items-center position-relative">
        <div className="container py-6">
          <h1 className="text-white mb-0">{title}</h1>
        </div>
      </div>
    </header>
  );
}

export default MainHeadingHead;

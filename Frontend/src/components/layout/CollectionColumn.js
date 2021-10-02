import React from "react";
import { Link } from "react-router-dom";

export const CollectionColumnHover = ({ data={} }) => {
  const { imageUrl, path, title, author } = data;
  return (
    <article className="collectionColumn mb-6 mb-xl-8 text-center position-relative">
      <div className="imgHolder">
        <Link to={path}>
          <img
            src={imageUrl}
            className="img-fluid w-100 d-block"
          ></img>
          <div className="ccCaption position-absolute bg-white d-flex align-items-center justify-content-center">
            <div className="w-100 py-3 px-3">
              <h2 className="fzMedium mb-4">{title}</h2>
              <h3 className="fontAlter text-gray777 mb-0">{author}</h3>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
};
export const CollectionColumnDefault = ({ data={} }) => {
  const { imageUrl, path, title, author } = data;
  return (
    <article className="collectionColumn mb-6 mb-lg-11">
      <div className="imgHolder mb-4">
        <Link to={path}>
          <img
            src={imageUrl}
            className="img-fluid w-100 d-block"
          ></img>
        </Link>
      </div>
      <h2 className="mb-1">
        <Link to={path}>{title}</Link>
      </h2>
      <h3 className="text-gray777 fontBase">{author}</h3>
    </article>
  );
};

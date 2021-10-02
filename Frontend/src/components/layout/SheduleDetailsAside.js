import React from "react";
import { Link } from "react-router-dom";


const SheduleDetailtem = ({detail}) => {
  const { icon, title, description, linkTitle, linkPath } = detail;
  return (
    <div className="col-12 col-md-4 col">
      <div className="sdaColumn d-flex mb-6">
        <span className="icnWrap d-block mr-3 mr-xl-6 flex-shrink-0 mt-2">
          <img
            src={icon}
            className="img-fluid"
            width="48"
            height="49"
            alt="icon"
          ></img>
        </span>
        <div className="descrWrap">
          <strong className="h h3 d-block font-weight-normal text-graydfdfdf mb-2">
            {title}
          </strong>
          <p className="mb-5">{description}</p>
          <Link
            to={linkPath}
            className="btn btnGr999 btnGr999Outline bdr2 align-top btn-sm"
          >
            {linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

const SheduleDetailsAside = ({sheduleDetails}) => {
  return (
    <aside className="scheduleDetailsAside bg-secondary text-gray888 pt-5 pt-md-8 pb-1 pb-md-4">
      <div className="container">
        <div className="row px-xl-6">
          {sheduleDetails.map((item,index) => (
            <SheduleDetailtem key={index} detail={item}></SheduleDetailtem>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SheduleDetailsAside;

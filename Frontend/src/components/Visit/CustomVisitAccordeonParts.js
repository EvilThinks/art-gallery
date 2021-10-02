import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";

const CustomToogle = ({ eventKey, children, ...props }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, (e) => {
    e.target.classList.toggle("collapsed");
    e.target.ariaExpanded = e.target.ariaExpanded === "true" ? "false" : "true";
  });
  return (
    <button
      className="position-relative pl-3 pr-6 pl-lg-6 pr-lg-12 text-left d-block w-100 vctOpener"
      type="button"
      aria-expanded="false"
      onClick={decoratedOnClick}
      {...props}
    >
      {children}
    </button>
  );
};
export const CustomAccordionCard = ({ eventKey, title, children }) => {
  eventKey = `${eventKey}`;
  return (
    <Card bsPrefix="vctAccItem">
      <h4 className="fontBase mb-0">
        <CustomToogle eventKey={eventKey}>{title}</CustomToogle>
      </h4>
      <Accordion.Collapse className="vtcAccSlide" eventKey={eventKey}>
        <div
          className="px-3 px-lg-6 pt-4 pb-3"
          dangerouslySetInnerHTML={{ __html: children }}
        ></div>
      </Accordion.Collapse>
    </Card>
  );
};

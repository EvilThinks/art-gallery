import React from "react";
import { Accordion } from "react-bootstrap";
import { CustomAccordionCard } from "./CustomVisitAccordeonParts";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";

const GMapFrame = () => (
  <div className="vtcFrameWrap position-relative w-100">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.259425640003!2d-90.29593598438974!3d38.61991257085702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b57b271310d3%3A0x53ff7568884d5d00!2sKnox%20Industrial%20Dr%2C%20St.%20Louis%2C%20MO%2063139%2C%20USA!5e0!3m2!1sen!2s!4v1587836825553!5m2!1sen!2s"
      className="w-100 h-100 d-block border-0 position-absolute"
      aria-hidden="false"
    ></iframe>
  </div>
);

function Directions({ directionsData }) {
  return (
    <VisitTwoColumnBlock
      id="directions"
      title="Directions"
      leftChildren={<GMapFrame></GMapFrame>}
    >
      <div className="eabDescrText mb-7">
        <p>
          The Museum of Art and History is located in the awesome Snow Road
          neighborhood, just steps right from sachan garden and 2 minutes from
          uptown newyork.
        </p>
      </div>
      <Accordion bsPrefix="accordion mt-10">
        {directionsData.length &&
          directionsData.map(({ title, description }, index) => {
            return (
              <CustomAccordionCard key={index} title={title} eventKey={index}>
                {description}
              </CustomAccordionCard>
            );
          })}
      </Accordion>
    </VisitTwoColumnBlock>
  );
}

export default Directions;

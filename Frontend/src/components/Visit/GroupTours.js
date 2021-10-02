import React from "react";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";
import { CustomAccordionCard } from "./CustomVisitAccordeonParts";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function GroupTours({ grouptoursData }) {
  return (
    <VisitTwoColumnBlock id="tours" title="Group tours">
      <p className="mb-6">
        If you plan to visit the museum with more than 12 people, contact us
        ahead of time so we can help you plan your day.
      </p>
      <p>
        For more information or to schedule a tour, please contact mark Dunel,
        Visitor Services Manager at dunel@museum.org or by calling on +(617)
        987-6543 or{" "}
        <Link to="/guides" className="textDecorationNone text-secondary">
          Fill out our group booking form
        </Link>
        .
      </p>
      <Accordion>
        {grouptoursData.length &&
          grouptoursData.map(({ title, description }, index) => (
            <CustomAccordionCard eventKey={index} title={title} key={index}>
              {description}
            </CustomAccordionCard>
          ))}
      </Accordion>
    </VisitTwoColumnBlock>
  );
}

export default GroupTours;

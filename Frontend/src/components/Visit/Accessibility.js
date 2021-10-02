import React from "react";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";
function Accessability() {
  return (
    <VisitTwoColumnBlock id="accessibility" title="Accessibility">
      <ul className="list-unstyled bulletList bulletListVvii mb-7">
        <li>
          We can lend you a wheelchair or a collapsible chair—just ask at the
          information desk.
        </li>
        <li>
          Visitors may borrow a standard manual wheelchair during their visit.
        </li>
        <li>
          We have a prayer room in our 1830 Warehouse. Let one of the team know
          if you’d like to use it.
        </li>
        <li>There is a hearing loop in the New Warehouse.</li>
        <li>Single occupancy / all gender restrooms are available.</li>
        <li>We are a breastfeeding-friendly museum.</li>
      </ul>
      <p className="mb-6">
        Look, just because I don't be givin' no man a foot massage don't make it
        right for Marsellus to throw Antwone into a glass.
      </p>
      <p className="mb-0">
        Find out everything you need to know about accessibility and facilities
        at the Art & History Museum. If you have questions, comments or
        suggestions about our facilities, please call us on{" "}
        <a href="tel:+6179876543" className="text-secondary textDecorationNone">
          +(617) 987-6543
        </a>{" "}
        or email{" "}
        <a
          href="mailto:contact@artandhistory.org.au"
          className="text-secondary textDecorationNone"
        >
          contact@artandhistory.org.au
        </a>
        .
      </p>
    </VisitTwoColumnBlock>
  );
}

export default Accessability;

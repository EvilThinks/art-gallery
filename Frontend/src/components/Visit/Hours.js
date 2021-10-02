import React from "react";
import { Link } from "react-router-dom";
import VisitTwoColumnBlock from "./VisitTwoColumnBlock";

function Hours({ prices }) {
  return (
    <VisitTwoColumnBlock id="hours" title="Hours & Admission">
      <h3 className="fontBase mb-3">Opening Hours</h3>
      <time dateTime="2011-01-12" className="d-block mb-5">
        Open Daily 9:30–6:00, Monday Until 8:00
      </time>
      <div className="eabDescrText mb-9">
        <p>
          The Museum will be closed Independence Day, Thanksgiving, Christmas,
          and New Year’s Day.
        </p>
      </div>
      <h3 className="fontBase mb-3">Admission Prices</h3>
      <table className="apDataTable w-100 mt-5 mb-9">
        <tbody>
          {prices.length &&
            prices.map(({ title, price }, index) => (
              <tr key={index}>
                <td>{title}</td>
                <td>{price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="eabDescrText mb-7">
        <p>Visitors can park for free in the caridonm to the museum.</p>
      </div>
      <div className="vtcBtnsWrap d-flex flex-wrap mx-n2">
        <Link
          to="profile"
          className="btn btn-secondary text-uppercase mx-2 mb-2"
        >
          Order Ticket
        </Link>
        <Link
          to="ticket"
          className="btn btnGre5 btnGre5Outline text-uppercase bdr2 mx-2 mb-2"
        >
          Become a member
        </Link>
      </div>
    </VisitTwoColumnBlock>
  );
}

export default Hours;

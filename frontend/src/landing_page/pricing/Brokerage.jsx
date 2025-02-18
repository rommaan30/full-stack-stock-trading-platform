import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-5 ">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}
            className="text-muted mt-4"
          >
            <li>
              Call & Trade RMS auto-squareoff: Additional charges ofrs 50 + gst
              per order
            </li>
            <li> Digital contract notes will be sent via e-mail</li>
            <li>
              For NRI account (non-pis).0.5% or rs100 per executed order for
              equity(whichever is lower){" "}
            </li>
            <li>
              Call & Trade RMS auto-squareoff: Additional charges ofrs 50 + gst
              per order
            </li>
            <li>
              For NRI account (non-pis).0.5% or rs100 per executed order for
              equity(whichever is lower){" "}
            </li>
            <li>
              Call & Trade RMS auto-squareoff: Additional charges ofrs 50 + gst
              per order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;

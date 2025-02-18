import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe </h1>
        <p>
          {" "}
          Extend your trading knowledge experience even future with our partner
          platforms{" "}
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
          <img src="/zerodhaFundhouse.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
          <img src="/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/sensibullLogo.svg" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
          <img src="/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <button
          className="p-3 btn btn-primary fs-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          {" "}
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Universe;

import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/education.svg" alt="" style={{ width: "80%" }} />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

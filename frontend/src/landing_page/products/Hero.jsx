import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5  p-5">
        <h1>Zerodha Products</h1>
        <h5 className="text-muted mt-3 fs-5">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offering <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

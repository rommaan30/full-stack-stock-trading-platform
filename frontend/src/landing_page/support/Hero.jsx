import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5 " id="supportWrapper">
        <h3 className="text-white">Support Portal</h3>
        <a href="" className="text-white">
          Track Tickets
        </a>
      </div>
      <div className="row p-3  m-3">
        <div className="col-6 p-3 ">
          <h1 className="text-white">
            {" "}
            Search for an answer or browser help topics to create a ticket{" "}
          </h1>
          <input
            style={{ bordeRadius: "20%" }}
            type="text"
            placeholder="Eg. how do i  activate F&O"
            className="form-control"
          />
          <br />
          <a href="" className="text-white fs-5 ">
            Track account opening
          </a>

          <a href="" className="text-white fs-5 ">
            Track segment activation{" "}
          </a>

          <a href="" className="text-white fs-5">
            Kite user Manual
          </a>
          <br />
          <a href="" className="text-white fs-5">
            margins
          </a>

          <a href="" className="text-white fs-5">
            {" "}
            intraday
          </a>
        </div>
        <div className="col p-5 ">
          <h1 className="text-white">Featured</h1>
          <a href="" className="text-white fs-5" style={{ lineHeight: "2" }}>
            1. Current Takeovers and Delisting - January 2024
          </a>
          <br />
          <a href="" className="text-white fs-5">
            2. Lates Intraday leverages - MIS & Co
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

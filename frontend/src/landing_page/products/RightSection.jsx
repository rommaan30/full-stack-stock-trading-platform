import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {" "}
            <a href={learnMore}>learn more</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;

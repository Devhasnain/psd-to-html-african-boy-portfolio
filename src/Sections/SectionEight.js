import React from "react";
import SectionEightCards from "../Components/SectionEightCards";

const SectionEight = () => {
  return (
    <div className="container-fluid sec-eight">
        <div className="row">
          <div className="col-8 mx-auto text-center">
            <h1 className="display-3 fw-bold">
             WHAT<br/> <span style={{ color: "#8c6eca",fontWeight:"lighter" }}>users think.</span>
            </h1>
            <br />
          </div>
        </div>
        <SectionEightCards/>
    </div>
  );
};

export default SectionEight;

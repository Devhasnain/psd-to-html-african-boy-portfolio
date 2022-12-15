import React from "react";
import SectionFourCards from "../Components/SectionFourCards";
import Arr from '../images/arrow.png'

const SectionFour = () => {
  return (
    <div className="container-fluid courses">
      <div className="row row-1 row-padding">
        <div className="col">
          <div className="d-flex align-items-baseline">
            <h1 className="display-2 fw-bold">FIND</h1>
            <h3 className="fs-1 fw-semibold mx-2">YOUR COURSE.</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-end">
          <li className="fs-4 fw-bold text-center">
               EDITION <br />
               <h1 className="fs-1 text-end">2022</h1>
              </li>
          </div>
        </div>
      </div>
      <SectionFourCards/>
      <div className="d-flex align-items-center justify-content-center my-4">
        <h3 className="fs-5 fw-semibold">More Courses</h3>
        <img alt="" className="pt-2 mx-4" style={{width:"4%"}} src={Arr} />
      </div>
    </div>
  );
};

export default SectionFour;

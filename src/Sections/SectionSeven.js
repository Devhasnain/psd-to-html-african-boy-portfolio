import React from "react";
import Img1 from "../images/vitem.png";
import Img2 from "../images/vitem1.png";
import Img3 from "../images/vitem2.png";
const SectionSeven = () => {
  return (
    <div className="container-fluid sec-seven">
      <div className="row row-padding">
        <div className="col-2">
        <div className="">
            <img alt="" className="card-img" src={Img2} />
          </div>
        </div>
        <div className="col img-col">
          <div className="">
            <img alt="" src={Img1} />
          </div>
        </div>
        <div className="col-2">
        <div className="">
            <img alt="" className="card-img" src={Img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;

import React from "react";
import Img from '../images/sitper.png';
const SectionFive = () => {
  return (
    <div className="container-fluid section-five my-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-12 col-10 mx-auto">
            <div className="">
              <h1 className="display-4 fw-bold">
                About <span style={{ color: "#8c6eca" }}>us.</span>
              </h1><br/>
              <p className="fs-5">
                You can add webfonts, meta tags, or analytics to this file.The
                build step will place the bundled scripts into the tag.To begin
                the development, run `npm start` or `yarn start`.
              </p><br/>
              <div className="">
                <ul className="my-grid">
                  <li className="" >You can add webfonts</li>
                  <li className="" >You can add webfonts</li>
                  <li className="" >You can add webfonts</li>
                  <li className="" >You can add webfonts</li>
                </ul>
              </div>
            </div>
          </div>
            <div className="col-lg-5 col-md-6 col-sm-10 col-11 mx-auto">
                <div className="">
                    <img alt="" className="mx-auto" style={{width:"70%"}} src={Img}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;

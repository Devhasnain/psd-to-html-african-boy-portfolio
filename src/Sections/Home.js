import React from "react";
import Beg from "../images/beg.png";

const Home = () => {
  return (
    <div className="container-fluid app-home m-0">
      <div className="row row-padding d-flex justify-content-between ">
        <div className="col-lg-4 col-md-4 col-sm-5 col-4">
          <div className="heading-div">
            <div className="d-flex">
              <h1 className="heading">UI</h1>
              <h1 className="heading2">.</h1>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div className="heading3">
                <img alt="" src={Beg} />
              </div>
              <li className="fs-4 fw-bold text-center">
                This is a text <br />
                blank text
              </li>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-5 col-7">
          <div className="heading-div2">
            <div className="edition-sec">
              <h2 className="fs-6 fw-semibold">EDITION</h2>
              <h1 className="fs-3 fw-semibold">2022</h1>
            </div>
            <div className="headings2-div2">
              <div>
                <h1 className="fs-3 fw-semibold">
                  If you open it directly in the browser.
                </h1>
                <br />
                <p className="fw-semibold fs-6">
                  Notice the use of %PUBLIC_URL% in the tags above. It will be
                  replaced with the URL of the `public` folder during the build.
                  Only files inside the `public` folder can be referenced from
                  the HTML.
                </p><br/>
              <div className="d-flex align-items-center p-0">
                <button className="btn-1">LETS START</button>
                <button className="btn-2 mx-4">LEARN MORE</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const SectionSix = () => {
  return (
    <div className="container-fluid sec-six">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-4 col-md-5 col-sm-6 col-10 p-0">
            <div className="d-flex align-items-center content">
              <div className="">
                <h1 className="display-4 fw-bold">
                  WHY <span style={{ color: "#8c6eca" }}>us.</span>
                </h1>
                <br />
                <p>
                  Notice the use of %PUBLIC_URL% in the tags above. It will be
                  replaced with the URL of the `public` folder during the build.
                  Only files inside the `public` folder can be referenced from
                  the HTML.
                </p>
                <br />
                <button className="btn-1">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;

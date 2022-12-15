import React from "react";
import SectionNineinputs from "../Components/SectionNineinputs";

const SectionNine = () => {
  return (
    <div className="container-fluid sec-nine">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-5 text-center">
            <div className="form">
              <div className="">
                <h1 className="display-3 fw-bold">
                  SUBSCRIBE
                  <br />
                  <span
                    className="fs-1"
                    style={{ color: "#8c6eca", fontWeight: "lighter" }}
                  >
                    to our newsletter.
                  </span>
                </h1>
                <p>
                  work correctly both with client-side routing and a non-root
                  public URL. Learn how to configure.
                </p>
                <SectionNineinputs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;

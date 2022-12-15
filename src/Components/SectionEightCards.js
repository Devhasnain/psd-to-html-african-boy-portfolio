import React from "react";
import { Data } from "../Components/SectionEightData";

const SectionEightCards = () => {
  return (
    <div className="row my-3">
      {Data.map((item, index) => {
        return (
          <div className="col-3 text-center mx-auto" key={index}>
            <div className="">
              <div className="">
                <img alt="" className="mx-auto" src={item.img} />
              </div>
              <h1 className="fs-3 my-2">{item.name}</h1>
              <div className="d-flex align-items-center justify-content-center">
                {item.starts.map((star, id) => {
                  return <img alt="" className="mx-2 my-2" src={star} key={id} />;
                })}
              </div>
              <div className="d-flex align-items-baseline">
                <img className="" alt="" src={item.quotes[0]} />
                <div className="">
                  {item.text}
                  <img className="" alt="" src={item.quotes[1]} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionEightCards;

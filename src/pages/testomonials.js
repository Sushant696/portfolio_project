import React from "react";
import card from "../images/card.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";

function Testimonial() {
  return (
    <div className="p-3 flex flex-col w-full justify-center items-center">
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1">Clients Testimonial </h1>
        <hr className="w-40 border border-black  mx-auto" />
      </div>
      <div className="w-[70%] flex justify-center rounded-[10px]">
        <div className="flex w-full items-center justify-between">
          <img src={card} alt="" />
        </div>

        <div className="flex w-full items-center justify-between">
          <img src={card1} alt="" />
        </div>

        <div className="flex w-full items-center justify-between">
          <img src={card2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

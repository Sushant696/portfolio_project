import React from "react";

function Testimonial() {
  return (
    <div className="p-3 flex flex-col w-full justify-center items-center">
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1">Clients Testimonial </h1>
        <hr className="w-40 border border-black  mx-auto" />
      </div>
      <div className="w-[70%] border flex justify-center rounded-[10px]">
        {/* First Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE]">
          {" "}
          first
        </div>

        {/* Second Card */}
        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE]">
          second
        </div>

        {/* Third Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE]">
          third
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

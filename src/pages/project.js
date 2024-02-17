import React from "react";
import humtto from "../images/humtto 1.png";
import wordPress from "../images/wordpress-589121_1280 1.png";

function Project() {
  return (
    <div className="p-3 flex flex-col w-full justify-center items-center">
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1">Projects</h1>
        <hr className="w-20 mx-auto" />
      </div>
      <div className="w-[70%] rounded-[10px]">
        {/* First Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE]">
          <div className="w-1/2 p-20 flex flex-col gap-10">
            <h1 className="font-bold text-[40px]">Humtto</h1>
            <div>
              <p className="text-[18px] opacity-[80%]">
                In collaboration with my talented group members – Solomon
                Silwal, Pramod Giri, Aryan Malla, and Bibek Sapkota – we
                successfully conceptualized and executed Smart School Bus
                Monitoring System as part of our Innovation Project course. Our
                innovative solution aimed to enhance the safety and efficiency
                of school transportation by incorporating advanced technology.
              </p>
              <button className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold">
                View Project
              </button>
            </div>
          </div>
          <div className="w-[40%] overflow-hidden">
            <img src={humtto} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Second Card */}
        <div className="m-5 p-3 rounded-[30px] bg-[#FFF3DE] p-20">
          <h1 className="font-bold text-[40px] p-4">
            Smart School Bus Monitoring System
          </h1>
          <p className="text-[18px] opacity-[80%]">
            In collaboration with my talented group members – Solomon Silwal,
            Pramod Giri, Aryan Malla, and Bibek Sapkota – we successfully
            conceptualized and executed Smart School Bus Monitoring System as
            part of our Innovation Project course. Our innovative solution aimed
            to enhance the safety and efficiency of school transportation by
            incorporating advanced technology.
          </p>
          <button className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md  focus:ring-opacity-50 font-bold">
            View Project
          </button>
        </div>

        {/* Third Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE]">
          <div className="w-[50%] p-20 flex flex-col gap-10">
            <h1 className="font-bold text-[40px]">WP Consultancy Project</h1>
            <div>
              <p className="text-[18px] opacity-[80%]">
                Presenting Education Tree Global, my WordPress frontend project.
                Explore my WordPress development in action.
              </p>
              <button className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold">
                View Project
              </button>
            </div>
          </div>
          <div className="w-[50%] overflow-hidden">
            <img
              src={wordPress}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

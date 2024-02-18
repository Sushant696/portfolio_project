/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import heroimg from "../images/heroimg.jpg";

const Home = () => {
  return (
    <div class="w-full flex flex-col justify-center items-center mb-10">
      <div className="w-[90%] flex justify-center">
        <div class="w-[40%]">
          <h1 class="text-[50px] font-bold  mt-9">
            Hello, my name
            <br /> is Sakshyam <br /> Kumar Acharya
          </h1>
          <p class="text-gray-70 text-lg mb-8">
            Hello, I'm Sakshyam Acharya, a dedicated data science student with a
            passion for leveraging data to derive meaningful insights and drive
            informed decision-making. Currently, I contribute to the dynamic
            team at TWB Creatives, where I serve as an outreach and support
            professional. My role involves fostering connections, ensuring
            seamless communication, and providing valuable assistance to our
            company.
          </p>
          <div class="">
            <a
              href="#"
              class="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md  focus:ring-opacity-50 font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div class="w-[50%] ml-20">
          <img src={heroimg} />
          <hero />
        </div>
      </div>
    </div>
  );
};

export default Home;

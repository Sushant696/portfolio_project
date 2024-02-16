

import React from 'react';

import hero2 from "../images/hero2.png";
import Navigation from '../components/navbar';

const Home = () => {
  return (
    
    <div class="z-10">
      <Navigation className="" />

    <div class="wrapper grid grid-cols-2 w-full">
      <div class="col-span-1">
      
    <h1 class="text-3xl font-bold text-center mt-9" >
      Hello, my name<br/> is Sakshyam <br/> Kumar Acharya
    </h1>
    <p class="text-gray-700 text-center text-lg mb-8">
      Hello, I'm Sakshyam Acharya, a dedicated data science student with a passion for leveraging data to derive meaningful insights
       and drive informed decision-making. Currently, I contribute to the dynamic team at TWB Creatives, where I serve as an outreach 
       and support professional. My role involves fostering connections, ensuring seamless communication, and providing valuable
        assistance to our company.
    </p>
    <div class="flex justify-center">
      <a href="#" class="inline-block px-4 py-2 text-white bg-custom-blue rounded-lg shadow-md hover:bg-custom-blue focus:ring-4
       focus:ring-blue-500 focus:ring-opacity-50 font-bold">Projects</a>
      <a href="#" class="inline-block px-4 py-2 ml-4 text-white bg-custom-blue rounded-lg shadow-md hover:bg-custom-blue focus:ring-4
       focus:ring-blue-500 focus:ring-opacity-50 font-bold">LinkedIn</a>
    </div>

  <div class="lg:w-1/2 bg-gray-100 hidden lg:block rounded-lg">
    </div>

      </div>
      <div class="col-span-1 z-0 ml-[20%]">
        <img src={hero2} />
        <hero />
      </div>
    </div>
    
</div>

  );
};






















































































export default Home;

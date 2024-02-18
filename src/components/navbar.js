/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav class="flex justify-between items-center bg-transparent text-gray py-4 px-6">
        <div class="text-lg font-bold">SAKSHYAM ACHARYA</div>
        <ul class="flex">
          <li class="ml-6">
            <Link to="/" class="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li class="ml-6">
            <Link to="/projects" class="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li class="ml-6">
            <Link to="/contact" class="hover:text-gray-400">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";
import './component.css'

function Navbar() {
  return (
    <div className="NavbarOne flex flex-row justify-between h-20  bg-opacity-10 items-center ">
      <div className="BoxOne flex flex-row items-center">
        <div className="ml-16 px-8">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3332 18.0001C15.0151 18.0001 17.9998 15.0153 17.9998 11.3334C17.9998 7.65152 15.0151 4.66675 11.3332 4.66675C7.65127 4.66675 4.6665 7.65152 4.6665 11.3334C4.6665 15.0153 7.65127 18.0001 11.3332 18.0001Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.428 23.3333L16 16"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="NewTextNavOne">News</div>
      </div>
      <div className="BoxTwo flex flex-row text-white items-center">
        <div className="px-4 NewTextNavOne">Location</div>
        <div className="px-4 py-2 mr-16 border NewTextNavOne border-white">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./page.css";

import imgOne from "../assets/giammarco.png";
import imgTwo from "../assets/amy.png";
import imgThree from "../assets/nasa.png";
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import NavRes from "../components/NavRes";

function MainPage() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-800 w-full mainbody">
        
      <Navbar />
      <NavbarTwo />
      <NavRes/>

      <div className="wholeBox flex flex-row pt-10  justify-between flex-wrap">
        <div className="items-center p-32 FlexBoxOne">
          <div className="NewHeading text-white text-4xl whitespace-pre-line">
            Heading with multiple
          </div>
          <div className="NewHeading text-white text-4xl pt-8 NewHeadingTwo">Lines</div>
          <div className=" OldSubHead NewText whitespace-pre-line pt-5">
            Subheading with multiple lineswhich can span across 2 or {"\n"} 3
            lines
          </div>
          <div className=" NewSubHead NewText  pt-5">
            Subheading with multiple lineswhich can span across 2 or  3
            lines
          </div>
          <div className="ReadMore flex items-center mt-6">
            <div className="px-10 py-4 bg-white text-blue-600">Read more</div>
          </div>
        </div>
        <div className="FlexBoxTwo">
          <img className="imgOne" src={imgOne} alt="Image one" />

          <img className="imgTwo" src={imgTwo} alt="Image two" />

          <img className="imgThree" src={imgThree} alt="Image two" />
        </div>
      <div className="ReadMoreResponsive flex items-center m-auto">
            <div className="px-32 py-4 bg-white text-blue-600 m-auto LittleReadMore">Read more</div>
          </div>
          
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default MainPage;

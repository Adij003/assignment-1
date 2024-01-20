import React from "react";
import TableImg from "../assets/ImageTable.png";
import Building from "../assets/ImageBuilding.png";

function SubPageFour() {
  return (
    <div className="BlueBox flex px-32 py-14 bg-blue-600 flex-row justify-evenly h-[28rem] w-full">
      <div className="ImagesRes w-full ">
        <img src={TableImg} alt="Table Image" />
      </div>
      <div className="OtherTwoImg flex flex-row justify-between">
      <img className="ResImgOne" src={Building} alt="Building" />
      <img className="ResImgTwo" src={Building} alt="Building" />
      </div>
      <div className="PicSetOne ">
        <img className="TableImgOne" src={TableImg} alt="Table Image" />
        <img className="buildingImgOne" src={Building} alt="Building" />
      </div>

      <div className="MiddleText flex flex-col justify-around w-1/2 px-16 items-center">
        <div className="WhoAreWe">Who are we</div>
        <div className="MiddleDescription">
          A Global Footprint, Rapid Expansion, and a Vision for Industry
          Excellence in Consultancy, Spanning 4 Continents and 12 Countries in
          Just 7 Years.
        </div>
        <div className="DiscoverMoreButton">Discover more</div>
      </div>

      <div className="PicSetTwo">
        <img className="TableImgTwo" src={TableImg} alt="Table Image" />
        <img className="buildingImgTwo" src={Building} alt="Building" />
      </div>
    </div>
  );
}

export default SubPageFour;

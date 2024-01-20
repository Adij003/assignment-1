import React from "react";
import MainPage from "./MainPage";
import SubPageOne from "../subPages/SubPageOne";
import SecondSubPage from "../subPages/SecondSubPage";
import SubPageThree from "../subPages/SubPageThree";
import GapHeadingPage from "./GapHeadingPage";
import SubPageFour from "../subPages/SubPageFour";
import SubPageCard from "../subPages/SubPageCard";
import Footer from "../subPages/Footer";

function Home() {
  return (
    <div>
      <MainPage />
      <SubPageOne />
      <SecondSubPage />
      <SubPageThree />
      <SecondSubPage />
      <SubPageThree />
      <GapHeadingPage/>
      <SubPageCard/>
      <SubPageFour/>
      <Footer/>
    </div>
  );
}

export default Home;

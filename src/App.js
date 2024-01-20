import Navbar from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwo";
import GapHeadingPage from "./pages/GapHeadingPage";
import MainPage from "./pages/MainPage";
import Footer from "./subPages/Footer";
import SecondSubPage from "./subPages/SecondSubPage";
import SubPageCard from "./subPages/SubPageCard";
import SubPageFour from "./subPages/SubPageFour";
import SubPageOne from "./subPages/SubPageOne";
import SubPageThree from "./subPages/SubPageThree";




function App() {
  return (
    <div >
    <MainPage/>
    <SubPageOne/>
    <SecondSubPage/>
    <SubPageThree/>
    <SecondSubPage/>
    <SubPageThree/>
    <GapHeadingPage/>
    <SubPageCard/>
    <SubPageFour/>
    <Footer/>
    
    
    </div>
  );
}

export default App;

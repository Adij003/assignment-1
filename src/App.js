import Navbar from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwo";
import Blog from "./pages/Blog";
import GapHeadingPage from "./pages/GapHeadingPage";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Footer from "./subPages/Footer";
import SecondSubPage from "./subPages/SecondSubPage";
import SubPageCard from "./subPages/SubPageCard";
import SubPageFour from "./subPages/SubPageFour";
import SubPageOne from "./subPages/SubPageOne";
import SubPageThree from "./subPages/SubPageThree";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
    
   <Routes>
    
    <Route path='/' element={ <Home/> } />
    <Route path='/blog' element={ <Blog/> } />
   </Routes>
    
    
    
    </Router>
      
  );
}

export default App;

import React from "react";
import Logo from "../assets/mine.jpg";
// import Services from "../pages/Services";
// import AboutUs from "../pages/AboutUs"
// import ContactUs from "../pages/ContactUs";
// import Pricing from "../pages/Pricing";

// import {BrowserRouter,Routes,Route} from "react-router-dom";


const navbar = () => {
  return (
    <nav>
      <div>
        <a>
          <img src={Logo} alt="" />
        </a>
      </div>
      
        {/* <BrowserRouter>
          
          <Routes>
            <Route path="/Services" element={<Services />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
       */}


       <ul>
        <li><a href="Services.jsx">Services</a></li>
        <li><a href="AboutUs.jsx">AboutUs</a></li>
        <li><a href="ContactUs.jsx">ContactUs</a></li>
        <li><a href="Pricing.jsx">Pricing</a></li>
       </ul>
       <button>Sign-Up</button>
    </nav>
  );
};

export default navbar;

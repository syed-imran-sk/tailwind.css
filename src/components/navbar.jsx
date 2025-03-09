import React from "react";
import Logo from "../assets/mine.jpg";
// import Services from "../pages/Services";
// import AboutUs from "../pages/AboutUs"
// import ContactUs from "../pages/ContactUs";
// import Pricing from "../pages/Pricing";

// import {BrowserRouter,Routes,Route} from "react-router-dom";


const navbar = () => {
  return (

    <div className="container mx-auto">
      <div className="flex justify-between items-center bg-amber-200">
      <div className="h-16 w-16">
        <a>
          <img src={Logo} alt="" className="rounded-full" />
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


       <ul className="flex space-x-6"> 
        <li><a  className="text-blue-600 hover:text-green-500 font-medium" href="index.jsx">Home</a></li>
        <li><a  className="text-blue-600 hover:text-green-500 font-medium" href="Services.jsx">Services</a></li>
        <li><a className="text-blue-600 hover:text-green-500 font-medium" href="AboutUs.jsx">AboutUs</a></li>
        <li><a className="text-blue-600 hover:text-green-500 font-medium" href="ContactUs.jsx">ContactUs</a></li>
        <li><a className="text-blue-600 hover:text-green-500 font-medium" href="Pricing.jsx">Pricing</a></li>
       </ul>
       <button className="bg-green-500 px-6 py-2 rounded-full text-white hover:bg-blue-400 font-medium">Sign-Up</button>
    </div>
    </div>
    
  );
};

export default navbar;

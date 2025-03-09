import "./App.css";
import Nav from "./components/navbar";
import Hero from "./pages/hero";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Pricing/>
    <Services/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
    
    
   

    </>
  );
}

export default App;

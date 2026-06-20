import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import HotelCleaning from "./HotelCleaning";
import AboutUs from "./AboutUs";
import Home  from "./Home";
import Dropone from "./Dropone";
import Droptow from "./Droptow";
import { Routes, Route} from "react-router-dom";
import Dropthree from "./Dropthree";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoGallery from "./VideoGallery";
function App() {
  return (
<>
 <Navbar />

       <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dropone"element={<Dropone /> } />
        <Route path="/Droptow" element={<Droptow />} />
        <Route path="/Dropthree" element={<Dropthree />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />
      </Routes>

<Footer />
 
</>
     
      
    
  );
}

export default App;
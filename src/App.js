import React from "react";
import Navbar from "./Particals/Navbar";
import Footer from "./Sections/Footer";
import Home from "./Sections/Home";
import SectionEight from "./Sections/SectionEight";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import SectionNine from "./Sections/SectionNine";
import SectionSeven from "./Sections/SectionSeven";
import SectionSix from "./Sections/SectionSix";
import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";
function App() {
  return (
    <>
      <Navbar />
      <Home /><br/>
      <SectionTwo/><br/>
      <SectionThree/><br/>
      <SectionFour/><br/>
      <SectionFive/><br/>
      <SectionSix/><br/>
      <SectionSeven/><br/>
      <SectionEight/><br/>
      <SectionNine/>
      <Footer/>
    </>
  );
}

export default App;

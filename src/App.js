import './App.css';
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Intro from "./components/Intro"
import Accommodation from "./components/Accommodation";
import BearSafari from "./components/BearSafari";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";


function App() {
  return (
      <div>
        <Navbar/>
        <Presentation />
        <Intro />
        <Accommodation />
        <BearSafari />
        <About />
        <Contact />
        <Footer />
      </div>

  );
}

export default App;

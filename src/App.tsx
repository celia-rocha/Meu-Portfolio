import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;

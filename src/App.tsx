import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";
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

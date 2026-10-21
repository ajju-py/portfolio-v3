import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Certifications,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/layout/Footer";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#050816] text-white relative z-0 selection:bg-cyan-500 selection:text-black">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

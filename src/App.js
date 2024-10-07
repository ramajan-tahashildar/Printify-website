import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default App;

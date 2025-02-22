import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import "tailwindcss/tailwind.css";

function App() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return (
    <Router>
      <div className="font-inter">
        <Navbar />
        <HeroSection />
        <Services />
        <CaseStudies />
        <Brands brands={brands} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
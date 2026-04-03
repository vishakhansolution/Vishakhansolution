import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // REMOVED: BrowserRouter as Router
import AOS from "aos";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// Styles
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    /* The <Router> tag is REMOVED from here. 
       It is now handled in main.jsx to prevent the "render a Router inside another Router" error.
    */
    <div className="relative min-h-screen bg-slate-950 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Professional 404 Redirect/Catch-all */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center text-center px-6">
                <div>
                  <h1 className="text-9xl font-serif text-slate-800">404</h1>
                  <p className="text-slate-400 mt-4 uppercase tracking-[0.5em] text-[10px] font-black">Archive Not Found</p>
                  <a href="/" className="mt-8 inline-block text-blue-600 text-[10px] font-black uppercase tracking-widest border-b border-blue-600 pb-1">Return Home</a>
                </div>
              </div>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
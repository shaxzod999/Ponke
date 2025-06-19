import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Integrations from "./pages/integrations";
import Helmet from "./pages/Helmet";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="bg-orange1">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/helmet" element={<Helmet />} />
      </Routes>
    </div>
  );
}

export default App;

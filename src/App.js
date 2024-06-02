import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header"; // Import the Header component
import Home from "./components/home/Home"; // Import the Home component
import Footer from "./components/footer/Footer";

const MyWork = lazy(() => import("./components/my-work/MyWork"));
const ContactMe = lazy(() => import("./components/contact/ContactMe"));
const AboutMe = lazy(() => import("./components/about/AboutMe"));

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </Suspense>
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;

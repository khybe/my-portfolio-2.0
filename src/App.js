import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header"; // Import the Header component
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import LoadingSpinner from "./UI/LoadingSpinner";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <Suspense fallback={<LoadingSpinner asOverlay />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/my-work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;

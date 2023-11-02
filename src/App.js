import React, { lazy, Suspense } from "react";

import Header from "./components/header/Header"; // Import the Header component
import Home from "./components/home/Home"; // Import the Home component
import AboutMe from "./components/about/AboutMe"; // Import the AboutMe component

const MyWork = lazy(() => import("./components/my-work/MyWork"));
const ContactMe = lazy(() => import("./components/contact/ContactMe"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <Home /> {/* Render the Home component */}
        <AboutMe /> {/* Render the AboutMe component */}
        <Suspense fallback={<p>Loading...</p>}>
          <MyWork />
        </Suspense>{" "}
        {/* Render the MyWork component */}
        <Suspense fallback={<p>Loading...</p>}>
          <ContactMe />
        </Suspense>{" "}
        {/* Render the ContactMe component */}
      </main>
      <Suspense fallback={<p>Loading...</p>}>
        <Footer />{" "}
      </Suspense>{" "}
      {/* Render the Footer component */}
    </div>
  );
}

export default App; // Export the App component as the default export

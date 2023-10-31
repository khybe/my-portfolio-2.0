import Header from "./components/header/Header"; // Import the Header component
import Home from "./components/home/Home"; // Import the Home component
import AboutMe from "./components/about/AboutMe"; // Import the AboutMe component
import MyWork from "./components/my-work/MyWork"; // Import the MyWork component
import ContactMe from "./components/contact/ContactMe"; // Import the ContactMe component
import Footer from "./components/footer/Footer"; // Import the Footer component

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <Home /> {/* Render the Home component */}
        <AboutMe /> {/* Render the AboutMe component */}
        <MyWork /> {/* Render the MyWork component */}
        <ContactMe /> {/* Render the ContactMe component */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App; // Export the App component as the default export

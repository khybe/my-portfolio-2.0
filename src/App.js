import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <section id="projects">
          <h2>MY WORK</h2>
        </section>
        <section id="contact">
          <h2>CONTACT ME</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

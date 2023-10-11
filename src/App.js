import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <section id="about">
          <h2>About Me</h2>
        </section>
        <section id="projects">
          <h2>My Work</h2>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>{/* <p> Here goes Navbar</p> */}</header>
      <main>
        <Home />
        <section id="about-me">
          <h2>About Me</h2>
        </section>
        <section id="my-work">
          <h2>My Work</h2>
        </section>
        <section id="contact-me">
          <h2>Contact Me</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

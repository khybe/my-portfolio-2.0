import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import MyWork from "./components/my-work/MyWork";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <MyWork />
        <section id="contact">
          <h2>CONTACT ME</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

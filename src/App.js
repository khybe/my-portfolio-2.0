import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import MyWork from "./components/my-work/MyWork";
import ContactMe from "./components/contact/ContactMe";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <MyWork />
        <ContactMe />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

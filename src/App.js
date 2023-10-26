import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import MyWork from "./components/my-work/MyWork";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <MyWork />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

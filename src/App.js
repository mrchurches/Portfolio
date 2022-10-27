import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import Contact from "../src/components/contact/Contact.jsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <section class="curved"></section> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

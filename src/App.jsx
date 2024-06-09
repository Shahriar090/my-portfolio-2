import AboutMe from "./components/About/AboutMe";
import HeroBanner from "./components/Banner/HeroBanner";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MyServices from "./components/MyServices/MyServices";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <AboutMe />
      <SocialLinks />
      <MyServices />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

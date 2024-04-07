import AboutMe from "./components/About/AboutMe";
import HeroBanner from "./components/Banner/HeroBanner";
import MyServices from "./components/MyServices/MyServices";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";

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
    </>
  );
}

export default App;

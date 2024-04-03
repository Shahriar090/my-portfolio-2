// import About from "./components/About/About";
import AboutMe from "./components/About/AboutMe";
import HeroBanner from "./components/Banner/HeroBanner";
import MyServices from "./components/MyServices/MyServices";
// import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <AboutMe />
      {/* <Banner /> */}
      <SocialLinks />
      <MyServices />
      {/* <About /> */}
    </>
  );
}

export default App;

import About from "./components/About/About";
import HeroBanner from "./components/Banner/HeroBanner";
// import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      {/* <Banner /> */}
      <SocialLinks />
      <About />
    </>
  );
}

export default App;

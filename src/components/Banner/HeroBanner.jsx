import { IoIosArrowForward } from "react-icons/io";
import heroImg from "../../assets/hero-bg.jpg";
import { TypeAnimation } from "react-type-animation";
import Container from "../../shared/Container";

const HeroBanner = () => {
  return (
    <section className="bg-black">
      <Container>
        <div
          className="relative  h-screen bg-no-repeat  bg-center md:bg-cover"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="overlay  absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="content absolute text-center top-[30%] sm:top-[35%] left-[0%] transform translate(-50%, -50%)">
            <div className="texts flex flex-col gap-6 pl-2 sm:pl-0">
              <span className="text-xl sm:text-2xl text-white font-medium capitalize text-start ">
                Hey There, I am
              </span>
              {/* type  animation start*/}
              <div className="text-start ">
                <TypeAnimation
                  sequence={[
                    " Front End Developer",
                    1000,
                    " React JS Developer",
                    1000,
                    "JavaScript Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="inline-block text-2xl sm:text-4xl lg:text-5xl"
                  style={{
                    color: "#FF5D56",
                  }}
                  repeat={Infinity}
                />
              </div>
              {/* type animation end */}

              <p className="text-[#707070] max-w-lg font-medium text-lg text-start ">
                From Chittagong, Bangladesh, I am a React Js and Front End Web
                Developer with a passion for crafting flawless
                websites.Let&apos;s chat about turning your digital dreams into
                a reality.
              </p>
            </div>
            <div className="mt-6 flex justify-start  pl-2 sm:pl-0">
              <button className="group btn-outline">
                Portfolio
                <span className="group-hover:rotate-90 transition-all duration-500">
                  <IoIosArrowForward className="text-lg ml-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;

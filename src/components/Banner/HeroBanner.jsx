import { IoIosArrowForward } from "react-icons/io";
import heroImg from "../..//assets/tech-bg.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <section id="home" className="bg-black">
      <div
        className="relative  w-full max-w-screen-2xl mx-auto  h-screen bg-no-repeat  bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="overlay  absolute inset-0 bg-black bg-opacity-90"></div>

        <div className="content absolute text-center top-[30%] sm:top-[35%] left-[0%] md:left-[20%] lg:left-[25%] xl:left-[32%] transform translate(-50%, -50%)">
          <div className="texts flex flex-col gap-6 pl-2 sm:pl-0">
            <span className="text-xl sm:text-2xl text-white font-medium capitalize text-start md:text-center">
              Hi There, I am
            </span>
            {/* type  animation start*/}
            <div className="text-start md:text-center">
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
                speed={60}
                className="inline-block text-2xl sm:text-4xl lg:text-5xl"
                style={{
                  color: "#FF5D56",
                }}
                repeat={Infinity}
              />
            </div>
            {/* type animation end */}

            <p className="text-white max-w-lg  text-lg text-start md:text-center">
              From Chittagong, Bangladesh, I am a React Js and Front End Web
              Developer with a passion for crafting flawless websites.Let&apos;s
              chat about turning your digital dreams into a reality.
            </p>
          </div>
          <div className="mt-6 flex justify-start md:justify-center  pl-2 sm:pl-0">
            <Link to="projects" smooth duration={500}>
              <button className="group btn-outline">
                Portfolio
                <span className="group-hover:rotate-90 transition-all duration-500">
                  <IoIosArrowForward className="text-lg ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

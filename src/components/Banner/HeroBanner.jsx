import { IoIosArrowForward } from "react-icons/io";
import heroImg from "../../assets/hero-bg.jpg";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  return (
    <section className="bg-black">
      <div
        className="relative w-full max-w-screen-2xl mx-auto h-screen bg-no-repeat  bg-center md:bg-cover"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="overlay  absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="content absolute text-center top-[35%] left-[0%] md:left-[10%] transform translate(-50%, -50%)">
          <div className="texts flex flex-col gap-6">
            <span className="text-xl sm:text-2xl text-white font-medium capitalize">
              Hey There, I am
            </span>
            {/* type  animation start*/}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Front End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " React JS Developer",
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
            {/* type animation end */}

            <p className="text-gray-300 max-w-lg font-medium text-lg">
              From Chittagong, Bangladesh, I am a React Js and Front End Web
              Developer with a passion for crafting flawless websites.Let&apos;s
              chat about turning your digital dreams into a reality.
            </p>
          </div>
          <div className="mt-6">
            <button className="group btn-outline">
              Portfolio
              <span className="group-hover:rotate-90 transition-all duration-500">
                <IoIosArrowForward className="text-lg ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

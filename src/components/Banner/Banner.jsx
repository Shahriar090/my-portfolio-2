import Container from "../../shared/Container";
import { IoIosArrowForward } from "react-icons/io";
import myImg from "../../assets/my-photo.jpg";
const Banner = () => {
  return (
    <section
      name="banner"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <Container>
        <div className="section-container flex flex-col md:flex-row gap-16 md:gap-5 lg:gap-0 items-center justify-center pt-20 md:pt-28">
          <div className="texts flex-[2] space-y-5">
            <span className="text-xl md:text-2xl text-gray-200">Hi There,</span>
            <h2 className="text-4xl lg:text-6xl font-semibold capitalize text-gray-200 tracking-wide">
              I am a <span className="text-pink-600">front end</span> web
              developer
            </h2>
            <p className="text-gray-300 max-w-md font-medium text-lg">
              From Chittagong, Bangladesh, I am a React Js and Front End Web
              Developer with a passion for crafting flawless websites.Let&apos;s
              chat about turning your digital dreams into a reality.
            </p>
            <div className="text-gray-200">
              <button className="group px-6 py-2 md:px-8 md:py-2 inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-gray-950 transition-all duration-300">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <IoIosArrowForward className="text-lg ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="img w-3/5 md:w-2/5 flex-[1] sm:bg-pink-600 rounded-xl cursor-pointer">
            <picture>
              <img
                src={myImg}
                alt="My Photo"
                className="rounded-xl  sm:rotate-6 hover:rotate-0 duration-300"
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

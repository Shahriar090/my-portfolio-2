import heroImg from "../../assets/sky-bg.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <section id="home" className="bg-black">
      <div
        className="relative w-full h-screen md:h-[600px] bg-no-repeat  bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="overlay  absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="content absolute top-[30%]  md:left-[25%] md:right-[25%] transform translate(-50%, -50%)">
          <div className="texts flex flex-col space-y-6 pl-2 md:pl-0">
            <span className="text-xl sm:text-2xl text-white font-light capitalize text-start md:text-center">
              I am here to serve as a
            </span>
            {/* type  animation start*/}
            <div className="text-start md:text-center">
              <TypeAnimation
                sequence={[
                  "JavaScript Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "React JS Developer",
                  1000,
                ]}
                wrapper="span"
                speed={70}
                className="inline-block text-2xl sm:text-3xl uppercase font-medium"
                style={{
                  color: "#FF5D56",
                }}
                repeat={Infinity}
              />
            </div>
            {/* type animation end */}

            <p className="text-white text-lg sm:text-xl text-start md:text-center font-light">
              I am a JavaScript Developer from Chattogram, Bangladesh.
              Currently, I provide Front-End web development services while also
              having knowledge of back-end technologies within the MERN stack.
              If you are interested in knowing more about me and how I can help
              with your project, please feel free to reach out.
            </p>
          </div>
          <div className="mt-6 flex justify-start md:justify-center pl-2 sm:pl-0">
            <Link to="projects" smooth duration={500}>
              <button className="btn-outline">My Latest Works</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

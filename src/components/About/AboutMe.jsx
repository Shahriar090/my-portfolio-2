import SectionTitle from "../../shared/SectionTitle";
import myImg from "../../assets/my-photo.jpg";
import Container from "../../shared/Container";
import { myInfos } from "./Info";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#111111]">
      {/* main content start */}
      <Container>
        <SectionTitle heading="About Me" subHeading="Personal Details" />
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-0">
          <div className="image w-full md:w-[40%]">
            <picture>
              <img
                src={myImg}
                alt="My Image"
                className="w-full lg:w-[75%] lg:mx-auto rounded-md"
              />
            </picture>
          </div>
          <div className="details w-full md:w-[60%]">
            <div className="flex flex-col gap-4">
              <span className="text-xl text-[#707070]">I Am</span>
              <h1 className="text-2xl md:text-3xl  font-medium text-white">
                Mohammad Shahriar Hossain
              </h1>
              {/* bar div */}
              <div className="w-10 h-1 rounded-md bg-[#FF5D56]"></div>

              <p className="text-[#707070]  max-w-lg sm:max-w-2xl text-[16px] font-medium">
                I am a JavaScript and Front-End Web Developer from Chatogram,
                Bangladesh, with a passion for crafting flawless websites.
                <br /> I also have backend knowledge in the <b>MERN</b> stack,
                so I have the ability to work on both the <b>client</b> and{" "}
                <b>server</b> sides. My focus is on achieving 100% client
                satisfaction.
              </p>
              <div className="info grid grid-cols-1 lg:grid-cols-2 gap-3 sm:max-w-2xl">
                {myInfos.map((info) => (
                  <div key={info.id}>
                    <div className="info-container flex items-center gap-3">
                      <div className="icons">{info.icon}</div>
                      <div>
                        <p className="text-[#707070] text-[16px]">
                          <b className="text-[#707070]"> {info.title}</b> :{" "}
                          {info.info}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

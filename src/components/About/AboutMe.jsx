import SectionTitle from "../../shared/SectionTitle";
import myImg from "../../assets/my-photo-2.png";
import Container from "../../shared/Container";
import { myInfos } from "./Info";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#111111]">
      {/* main content start */}
      <Container>
        <SectionTitle heading="About Me" subHeading="Personal Details" />
        <div className=" flex flex-col-reverse md:flex-row md:items-center gap-5 lg:gap-0">
          <div className="image flex-[1]">
            <picture>
              <img
                src={myImg}
                alt="My Image"
                className="w-full lg:w-3/4 mx-auto rounded-md "
              />
            </picture>
          </div>
          <div className="details flex-[2]">
            <div className="flex flex-col gap-5">
              <span className="text-xl text-[#707070]">I Am</span>
              <h1 className="text-2xl md:text-3xl  font-medium text-white">
                Mohammad Shahriar Hossain
              </h1>
              {/* bar div */}
              <div className="w-10 h-1 rounded-md bg-[#FF5D56]"></div>

              <p className="text-[#707070]  max-w-lg sm:max-w-2xl text-[16px] font-medium">
                From Chittagong, Bangladesh, I am a React Js and Front End Web
                Developer with a passion for crafting flawless websites. My
                focus is on achieving 100% client satisfaction.
              </p>

              <p className="text-[#707070]  max-w-lg sm:max-w-2xl text-[16px] font-medium">
                {" "}
                I find joy in working with JavaScript and React Js, and I also
                have a basic understanding of{" "}
                <span className="font-semibold">
                  Node Js, Express Js, and MongoDB{" "}
                </span>
                . Let&apos;s connect and explore how we can collaborate for
                remarkable digital experiences.
              </p>

              <div className="info grid grid-cols-1 lg:grid-cols-2 gap-2 sm:max-w-2xl">
                {myInfos.map((info) => (
                  <div key={info.id}>
                    <div className="info-container flex items-center gap-4">
                      <div className="icons">
                        <img
                          src={info.icon}
                          alt="Info Img"
                          className="bg-[#FF5D56] w-7 h-7 p-1.5 rounded-md"
                        />
                      </div>
                      <div className="text-[#707070] text-[16px]">
                        <p>
                          <span className="font-semibold text-[#707070]">
                            {" "}
                            {info.title}
                          </span>{" "}
                          : {info.info}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="space-x-3">
                <button className="btn-outline">Contact Now</button>
                <button className="btn-outline">See Projects</button>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

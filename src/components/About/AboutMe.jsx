import SectionTitle from "../../shared/SectionTitle";
import myImg from "../../assets/my-photo.jpg";
import Container from "../../shared/Container";
import { myInfos } from "./Info";

const AboutMe = () => {
  return (
    <section className="bg-[#111111]">
      {/* main content start */}
      <Container>
        <SectionTitle heading="About Me" subHeading="Details About Me" />
        <div className=" flex flex-col-reverse md:flex-row gap-10 ">
          <div className="image flex-[1]">
            <picture>
              <img
                src={myImg}
                alt="My Image"
                className="w-full lg:mx-auto rounded-sm opacity-75"
              />
            </picture>
          </div>
          <div className="details flex-[2]">
            <div className="flex flex-col gap-5">
              <span className="text-xl text-[#707070] font-medium">I Am</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
                Mohammad Shahriar Hossain
              </h1>

              <p className="text-[#707070] font-medium max-w-lg sm:max-w-2xl text-[16px]">
                From Chittagong, Bangladesh, I am a React Js and Front End Web
                Developer with a passion for crafting flawless websites.
              </p>
              <p className="text-[#707070] font-medium max-w-lg sm:max-w-2xl text-[16px]">
                My focus is on achieving 100% client satisfaction. I find joy in
                working with JavaScript and React Js, and I also have a basic
                understanding of{" "}
                <span className="text-gray-400">
                  Node Js, Express Js, and MongoDB{" "}
                </span>
                . Let&apos;s connect and explore how we can collaborate for
                remarkable digital experiences.
              </p>

              <div className="info grid grid-cols-1 lg:grid-cols-2 gap-3">
                {myInfos.map((info) => (
                  <div key={info.id}>
                    <div className="info-container flex items-center gap-4">
                      <div className="icons w-7 h-7">
                        <img
                          src={info.icon}
                          alt="Info Img"
                          className="bg-[#FF5D56] p-1 rounded-md"
                        />
                      </div>
                      <div className="text-[#707070]">
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

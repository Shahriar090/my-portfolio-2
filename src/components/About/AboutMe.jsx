import SectionTitle from "../../shared/SectionTitle";
import myImg from "../../assets/my-photo.jpg";
import Container from "../../shared/Container";
const AboutMe = () => {
  return (
    <section className="bg-[#111111] pb-10">
      {/* main content start */}
      <Container>
        <SectionTitle heading="About Me" subHeading="Details About Me" />
        <div className=" flex flex-col-reverse md:flex-row gap-10 lg:gap-2 ">
          <div className="image flex-[1]">
            <picture>
              <img
                src={myImg}
                alt="My Image"
                className="w-full lg:w-3/5 lg:mx-auto rounded-sm"
              />
            </picture>
          </div>
          <div className="details flex-[1]">
            <div className="flex flex-col gap-4">
              <span className="text-xl text-gray-300 font-medium">I Am</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                Mohammad Shahriar Hossain
              </h1>

              <p className="text-gray-400 font-medium max-w-lg">
                From Chittagong, Bangladesh, I am a React Js and Front End Web
                Developer with a passion for crafting flawless
                websites.Let&apos;s chat about turning your digital dreams into
                a reality.
              </p>
              <p className="text-gray-400 font-medium max-w-lg">
                My focus is on achieving 100% client satisfaction. I find joy in
                working with JavaScript and React Js, and I also have a basic
                understanding of Node Js, Express Js, and MongoDB . Let&apos;s
                connect and explore how we can collaborate for remarkable
                digital experiences.
              </p>
              <div className="space-x-3">
                <button className="btn-outline">Contact Now</button>
                <button className="btn-outline">See Projects</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

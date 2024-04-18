import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#111111]">
      <Container>
        <SectionTitle
          heading="Get in Touch"
          subHeading="Feel Free To Drop A Line - Contact Us"
        />

        {/* main section */}
        <section className="flex items-center justify-center">
          <form className="flex flex-col gap-5 w-full md:max-w-3xl">
            <div className="name-email flex flex-col lg:flex-row gap-5 items-center">
              <div className="name w-full">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div className="email w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>
            </div>
            <div className="subject">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="form-input"
              />
            </div>
            <div className="message">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                cols="20"
                rows="5"
                className="form-input"
              ></textarea>
            </div>
            <div className="submit-btn flex justify-center">
              <button className="btn-outline text-[#ff5d56] border-[#ff5d56] hover:bg-[#ff5d56] hover:text-white">
                Contact Now
              </button>
            </div>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default Contact;

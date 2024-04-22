import { useRef } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  /* 
  service id - service_2nnlexb
  public key - E9LXZxPlYpHSSOFlB
  template id - template_y234grq
  */

  // email js function

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2nnlexb",
        "template_y234grq",
        form.current,
        "E9LXZxPlYpHSSOFlB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="bg-[#111111]">
      <Container>
        <SectionTitle
          heading="Get in Touch"
          subHeading="Feel Free To Drop A Line - Contact Us"
        />

        {/* main section */}
        <section className="flex items-center justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-full md:max-w-3xl"
          >
            <div className="name-email flex flex-col lg:flex-row gap-5 items-center">
              <div className="name w-full">
                <input
                  type="text"
                  name="name"
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
            <div type="submit" className="submit-btn flex justify-center">
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

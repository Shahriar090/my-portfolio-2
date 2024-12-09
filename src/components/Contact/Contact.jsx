import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";

import "./contact.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // email js function

  const sendEmail = (data, e) => {
    emailjs
      .sendForm(
        "service_2nnlexb",
        "template_y234grq",
        e.target,
        "E9LXZxPlYpHSSOFlB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          return toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#151515]">
      <Container>
        <SectionTitle
          heading="Get in Touch"
          subHeading="Feel Free To Drop A Line - Contact Us"
        />

        {/* main section */}
        <section className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit(sendEmail)}
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
                  {...register("name", {
                    required: "Name Is Required",
                    minLength: {
                      value: 4,
                      message: "Name Must Be At Least 4 Characters",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="email w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="form-input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="subject">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="form-input"
                {...register("subject", {
                  required: "Subject is required",
                  minLength: {
                    value: 4,
                    message: "Subject Must Be At Least 4 Characters",
                  },
                })}
              />
              {errors.subject && (
                <span className="text-red-600">{errors.subject.message}</span>
              )}
            </div>
            <div className="message">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                cols="20"
                rows="5"
                className="form-input"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message Must Be At Least 10 Characters",
                  },
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-600">{errors.message.message}</span>
              )}
            </div>
            <div className="submit-btn flex justify-center mt-5">
              <button type="submit" className="animated-btn">
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

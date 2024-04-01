import SectionTitle from "../../shared/SectionTitle";
import Container from "../../shared/Container";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="w-full h-full bg-gradient-to-b from-gray-800 to-black">
      <SectionTitle subHeading="My Services" heading="What I Do ?" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;

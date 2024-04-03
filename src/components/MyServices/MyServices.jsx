import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="bg-[#151515]">
      <Container>
        <SectionTitle heading="My Services" subHeading="Services Details" />

        {/* main content start */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
            {services.map((service) => (
              <ServicesCard key={service.id} data={service} />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default MyServices;

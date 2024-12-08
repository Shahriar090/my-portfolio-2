import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../data/ServicesData";

const MyServices = () => {
  return (
    <section id="services" className="bg-[#151515]">
      <Container>
        <SectionTitle heading="My Services" subHeading="Services Details" />

        {/* main content start */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {servicesData.map((service) => (
              <ServicesCard key={service.id} data={service} />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default MyServices;

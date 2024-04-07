import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("servicesData.json");
        if (!response.ok) {
          throw new Error("Failed To Fetch Services Data");
        }
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center text-xl font-semibold text-gray-200">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-xl font-semibold text-red-600">
        Error: {error}
      </div>
    );
  }
  return (
    <section className="bg-[#151515]">
      <Container>
        <SectionTitle heading="My Services" subHeading="Services Details" />

        {/* main content start */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
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

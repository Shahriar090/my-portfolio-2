import PropTypes from "prop-types";

const ServiceCard = ({ data }) => {
  const { service, description, serviceImg } = data;

  return (
    <div className="relative service-card w-full h-full  rounded-md bg-gray-950 cursor-pointer">
      <div className="service-item">
        <div className="flex justify-center items-center pt-5">
          <picture>
            <img src={serviceImg} alt="Service Image" className="" />
          </picture>
        </div>
        {/* <h1 className="text-gray-200 text-lg bg-pink-700 text-start rounded-sm uppercase p-3 md:p-4">
          {service}
        </h1> */}
        <p className=" text-gray-300 p-3 md:p-4 mt-5 text-lg h-[320px] font-normal">
          {description}
        </p>
      </div>
      <div className="p-3 md:p-4">
        <button className="px-6 py-2 md:px-8 md:py-2 inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-gray-200 transition-all duration-300">
          Contact Now
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.shape({
    service: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
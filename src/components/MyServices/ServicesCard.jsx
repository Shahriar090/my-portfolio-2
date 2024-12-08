import PropTypes from "prop-types";

const ServicesCard = ({ data }) => {
  const { service, description, serviceImg } = data;
  return (
    <div className="w-full h-full group bg-[#222222]  rounded-sm border border-[#333] cursor-pointer hover:border-[#FF5D56] transition-all duration-500 p-6">
      <div className="service-container flex flex-col cursor-pointer">
        <div>{serviceImg}</div>
        <div className="details text-start">
          <h2
            title={service}
            className="text-white text-xl font-medium capitalize py-3 truncate w-full"
          >
            {service}
          </h2>
          <p className="text-[#707070] text-[16px] font-medium group-hover:text-white transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// props validation
ServicesCard.propTypes = {
  data: PropTypes.shape({
    service: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    serviceImg: PropTypes.element.isRequired,
  }).isRequired,
};

export default ServicesCard;

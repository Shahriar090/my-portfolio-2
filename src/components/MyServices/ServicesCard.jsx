import PropTypes from "prop-types";

const ServicesCard = ({ data }) => {
  const { service, description, serviceImg } = data;
  return (
    <div className="w-full bg-[#222222]  rounded-md border border-[#333] cursor-pointer hover:border-[#FF5D56] transition-all duration-500">
      <div className="service-container w-full h-full p-8">
        <div className="img h-20 w-20 mx-auto">
          <img
            src={serviceImg}
            alt="Service Image"
            className=" bg-[#FF5D56] p-3 rounded-md"
          />
        </div>
        <div className="details text-center mt-6">
          <h2 className="text-[#F1FFFF] text-xl font-bold capitalize">
            {service}
          </h2>
          <p className="text-[#707070] text-[16px] pt-6 text-center max-w-sm mx-auto">
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
    serviceImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesCard;

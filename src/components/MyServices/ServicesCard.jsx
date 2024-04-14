import PropTypes from "prop-types";

const ServicesCard = ({ data }) => {
  const { service, description, serviceImg } = data;
  return (
    <div className="w-full bg-[#222222]  rounded-md border border-[#333] cursor-pointer hover:border-[#FF5D56] transition-all duration-500 p-3 sm:p-5">
      <div className="service-container">
        <div className="img h-16 w-16 mx-auto">
          <img
            src={serviceImg}
            alt="Service Image"
            className=" bg-[#FF5D56] p-3 rounded-md"
          />
        </div>
        <div className="details text-center">
          <h2 className="text-white text-xl font-semibold capitalize py-3">
            {service}
          </h2>
          <p className="text-[#707070] text-lg  text-center">{description}</p>
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

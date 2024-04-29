import PropTypes from "prop-types";

const ServicesCard = ({ data }) => {
  const { service, description, serviceImg } = data;
  return (
    <div className="w-full h-full bg-[#222222]  rounded-sm border border-[#333] cursor-pointer hover:border-[#FF5D56] transition-all duration-500 py-10 px-7">
      <div className="service-container flex flex-col">
        <div className="img img flex h-14 w-14">
          <img
            src={serviceImg}
            alt="Service Image"
            className=" bg-[#FF5D56] p-3 rounded-md"
          />
        </div>
        <div className="details text-start">
          <h2 className="text-white text-xl font-medium capitalize py-3">
            {service}
          </h2>
          <p className="text-[#707070] text-[16px] font-medium">
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

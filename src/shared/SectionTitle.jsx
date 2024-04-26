import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-24 text-center ">
      <h1 className="text-2xl sm:text-3xl  text-[#ff5d56] uppercase font-berkshire-swash">
        {heading}
      </h1>

      <h4 className="text-[16px] font-medium text-[#707070] mt-1">
        {subHeading}
      </h4>
      <div className="circle flex space-x-2 justify-center mt-4">
        <div className="w-2.5 h-2.5 bg-[#FF5D56] rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-[#FF5D56] rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-[#FF5D56] rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-[#FF5D56] rounded-full"></div>
      </div>
    </div>
  );
};

// props validation
SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;

import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="py-10 sm:py-16 lg:py-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 uppercase">
        {heading}
      </h1>
      <h4 className="text-lg sm:text-xl font-medium text-gray-400">
        {subHeading}
      </h4>
    </div>
  );
};

// props validation
SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;

import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 pt-16 ">{children}</div>
  );
};

// props validation
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

import { useState } from "react";
import PropTypes from "prop-types";

const Filtering = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filter By Category");
  const options = ["ALL", "FRONT-END", "BACK-END", "FULL-STACK"];

  const toggleFiltering = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onFilterChange(option);
  };
  return (
    <>
      <div className="relative flex justify-end pb-3">
        {/* dropdown button */}
        <button onClick={toggleFiltering} className="btn-sm">
          {selected}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* dropdown menu */}

      {isOpen && (
        <div className="absolute right-3 md:right-32 w-32 z-10 bg-[#111111] rounded-md shadow-lg">
          <div className="py-1 flex flex-col">
            {options.map((option) => (
              <button
                className="py-2 rounded-md hover:bg-[#222222] text-white transition-all duration-300 text-sm"
                key={option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// props validation
Filtering.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
export default Filtering;

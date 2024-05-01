import { useState } from "react";
import Modal from "../../ui/Modal";
import PropTypes from "prop-types";
const ProjectCard = ({ data }) => {
  const {
    projectTitle,
    projectImg,
    projectDescription,
    githubLink,
    liveDemo,
    usedTools,
  } = data;
  // modal state
  const [modal, setModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  // modal close function
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  // toggle description

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div className="w-full bg-[#222222] overflow-hidden cursor-pointer rounded-md">
      <div className=" content p-2">
        {/* <h1 className="text-xl font-semibold  text-white   uppercase pb-5">
          {projectTitle}
        </h1> */}
        <div className="img">
          <img
            src={projectImg}
            alt="Project Image"
            className="w-full  rounded-md"
          />
        </div>
        <div className="mt-4">
          <button
            className="btn-primary"
            onClick={() => setModal((prev) => !prev)}
          >
            See Details
          </button>
          <Modal isModalOpen={modal} onClose={handleModalClose}>
            <Modal.Header>
              <h1 className="text-4xl text-[#FF5D56] font-berkshire-swash ">
                {projectTitle}
              </h1>
              <p className="text-[#707070] pt-3 text-[16px]">
                {showFullDescription
                  ? projectDescription
                  : projectDescription.slice(0, 180)}
              </p>
              {projectDescription.length > 60 && (
                <button
                  onClick={toggleDescription}
                  className="text-sm  text-[#707070] font-semibold"
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
              <div className="tools h-[160px] pt-5">
                <span className="font-medium text-[20px] text-[#FF5D56]">
                  Used Tools
                </span>
                {usedTools.map((item, index) => (
                  <li className=" text-[#707070]  text-[16px]" key={index}>
                    {item}
                  </li>
                ))}
              </div>
              <div className="buttons flex justify-between pt-8">
                <a className="btn btn-sm " href={githubLink} target="_blank">
                  GitHub
                </a>
                <a className="btn btn-sm " href={liveDemo} target="_blank">
                  Live Demo
                </a>
              </div>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>
          </Modal>
        </div>
      </div>
    </div>
  );
};

// Prop validation
ProjectCard.propTypes = {
  data: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    usedTools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default ProjectCard;

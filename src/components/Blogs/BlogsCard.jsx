import { useState } from "react";
import Modal from "../../ui/Modal";
import PropTypes from "prop-types";
const BlogsCard = ({ data }) => {
  const { title, blogImg, content } = data;
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

  const createShortenedContent = (htmlContent) => {
    const temporaryDiv = document.createElement("div");
    temporaryDiv.innerHTML = htmlContent;
    return temporaryDiv.innerText.slice(0, 180);
  };
  return (
    <div className="w-full bg-[#222222] overflow-hidden cursor-pointer rounded-md">
      <div className=" content p-5">
        <h1 className="text-xl font-semibold  text-white   uppercase pb-5 h-28">
          {title}
        </h1>
        <div className="img">
          <img
            src={blogImg}
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
              <h1 className="text-2xl text-white font-medium">{title}</h1>
              <div
                className="text-gray-200 text-[16px] h-52 overflow-y-auto overflow-x-auto mt-10 pr-4"
                dangerouslySetInnerHTML={{
                  __html: showFullDescription
                    ? content
                    : createShortenedContent(content),
                }}
              />
              {content.length > 60 && (
                <button
                  onClick={toggleDescription}
                  className="text-sm text-[#707070] font-semibold"
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
              <Modal.CloseButton />
            </Modal.Header>
          </Modal>
        </div>
      </div>
    </div>
  );
};
// PropTypes definition
BlogsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    blogImg: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default BlogsCard;

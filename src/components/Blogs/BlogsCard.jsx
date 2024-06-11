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
        <div className="heading h-20">
          <h1 className="text-xl font-medium  text-white capitalize">
            {title}
          </h1>
        </div>
        <div className="img">
          <img
            src={blogImg}
            alt="Project Image"
            className="w-full h-[250px] object-cover rounded-md"
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
              <h1 className="text-2xl text-white font-medium max-w-md">
                {title}
              </h1>
              <div
                className="text-gray-200 text-[16px] w-full h-56 overflow-y-auto mt-10 pr-4"
                dangerouslySetInnerHTML={{
                  __html: showFullDescription
                    ? content
                    : createShortenedContent(content),
                }}
              />
              {content.length > 50 && (
                <button
                  onClick={toggleDescription}
                  className="text-sm text-[#707070] font-semibold"
                >
                  {showFullDescription ? "See Less" : "Click Here To Read Full"}
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

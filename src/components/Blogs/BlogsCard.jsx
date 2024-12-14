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

  // function to remove html tags and return plain text
  const getPlainText = (htmlContent) => {
    const temporaryDiv = document.createElement("div");
    temporaryDiv.innerHTML = htmlContent;
    return temporaryDiv.innerText;
  };

  // function to get the first 100 words from the plain text

  const getShortenedContent = (content, wordLimit) => {
    const plainText = getPlainText(content);
    const words = plainText.split(" ");
    if (words.length <= wordLimit) {
      return plainText;
    }
    return words.slice(0, wordLimit).join(" ") + " ......";
  };

  const truncatedContent = getShortenedContent(content, 100);

  return (
    <div className="w-full bg-[#222222] overflow-hidden cursor-pointer rounded-md">
      <div className="content flex flex-col">
        <div className="img">
          <img
            src={blogImg}
            alt="Project Image"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
        <div className="main-contents p-3">
          <div className="line-clamp-1">
            <h1 className="text-xl font-medium  text-white capitalize">
              {title}
            </h1>
          </div>
          <div className="mt-3">
            <button
              className="btn-primary"
              onClick={() => setModal((prev) => !prev)}
            >
              See Details
            </button>
            <Modal
              isModalOpen={modal}
              onClose={handleModalClose}
              modalWidth={"80%"}
              modalHeight={"auto"}
            >
              <Modal.Header>
                <h1 className="text-2xl text-white font-medium">{title}</h1>
                <div className="w-full h-80 overflow-y-auto mt-10 pr-4">
                  <p className="text-gray-200 text-[22px] tracking-wider font-light">
                    {showFullDescription
                      ? getPlainText(content)
                      : truncatedContent}
                  </p>
                </div>
                {getPlainText(content).length > 100 && (
                  <button
                    onClick={toggleDescription}
                    className="text-sm text-[#707070] font-semibold"
                  >
                    {showFullDescription
                      ? "See Less"
                      : "Click Here To Read Full"}
                  </button>
                )}
                <Modal.CloseButton />
              </Modal.Header>
            </Modal>
          </div>
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

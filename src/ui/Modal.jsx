import { useContext, useRef } from "react";
import cn from "../utils/cn";
import { createContext } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
// modal context
const ModalContext = createContext(null);
const Modal = ({ isModalOpen, onClose, children, className }) => {
  // creating modal container ref
  const containerRef = useRef(null);

  //   to close the modal when click the outside of the modal container

  const handleOutsideClose = (e) => {
    if (!containerRef.current?.contains(e.target)) {
      onClose();
    }
  };

  //   I am using the portal to avoid rendering the modal inside the DOM

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed flex items-center justify-center inset-0 bg-gray-800/70 invisible z-[999] p-1",
          { visible: isModalOpen }
        )}
      >
        {/* modal container */}
        <div
          ref={containerRef}
          className={cn("bg-[#151515]  rounded-sm", className)}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal")
  );
};

// modal close button

const CloseButton = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button className="" onClick={onClose}>
      {children ? (
        children
      ) : (
        <IoClose className="text-4xl  text-[#FF5D56] h-8 w-8  absolute -top-4 -right-4 border border-neutral-600 rounded-full p-1" />
      )}
    </button>
  );
};
const Header = ({ children }) => {
  return <div className=" w-full relative">{children}</div>;
};

// props validation
CloseButton.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  children: PropTypes.node,
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;

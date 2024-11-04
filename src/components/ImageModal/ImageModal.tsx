import Modal from "react-modal";
import { Image } from "../../App";
import React from "react";
interface ImageModalProps {
  image: Image;
  onClose: () => void;
}
Modal.setAppElement("#root");
const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
        },
      }}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};
export default ImageModal;

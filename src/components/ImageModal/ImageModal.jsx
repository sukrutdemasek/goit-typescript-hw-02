import Modal from "react-modal";

export default function ImageModal({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  imagePressed,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
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
        <img
          src={imagePressed.urls.regular}
          alt={imagePressed.alt_description}
        />
      </Modal>
    </div>
  );
}

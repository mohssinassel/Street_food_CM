import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function CustomImage({ image, pt }) {
  // modal settings
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="custom-image" style={{ paddingTop: pt }}>
        <img src={image.src} alt="" onClick={toggleModal} />
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="image_div">
              <img
                src={image.src}
                alt={image.name}
                style={{
                  height: "200px",
                  width: "300px",
                  // top: "0",
                  borderRadius: "5px",
                  boxShadow: "0 9px 15px var(--shadow-color)",
                }}
              />
            </div>
            <div className="info_div">
              <h2>{image.name}</h2>
              <p>{image.description}</p>
                <span style={{ color: "gray", fontWeight: "600" }}>
                  {image.local}
                </span>
              
            </div>
          </div>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-modal"
            onClick={toggleModal}
          />
        </div>
      )}
    </>
  );
}

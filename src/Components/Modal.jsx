import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ close, setClose }) => {
  return createPortal(
    <ModalOverlay close={close} setClose={setClose} />,
    document.querySelector("#modal__root")
  );
};

const ModalOverlay = ({ close, setClose }) => {
  return (
    <main className="main ">
      <section
        className={`  ${close ? "overlay" : "overlay__active"} `}
        onClick={() => setClose(false)}
      >
        {close ? (
          <section className="modal__content">
            <button onClick={() => setClose(false)} className="close">
              <AiOutlineClose />
            </button>
            <h1 className="modal__heading">modal content</h1>
          </section>
        ) : null}
      </section>
    </main>
  );
};

export default Modal;

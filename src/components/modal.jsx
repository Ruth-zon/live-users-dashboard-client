import React from "react";
import style from "./style";

const Modal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }
  return (
    <style.ModalFade>
      <style.Modal>
        <h2>Modal Window</h2>
        <div class="content">{props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </style.Modal>
    </style.ModalFade>
  );
};

export default Modal;

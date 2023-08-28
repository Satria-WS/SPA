import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./css/Modal.css";
import Backdrop from "./Backdrop";

const ModalOverlay = () => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      {/* header */}
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      {/* form */}
      <form
        action=""
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = ({show,onCancel,...props}) => {
  return (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={"modal"}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};
export default Modal;

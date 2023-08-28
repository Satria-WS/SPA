import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./css/Modal.css";
import Backdrop from "./Backdrop";

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footer,
  footerClass,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      {/* header */}
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>

      {/* form */}
      <form
        action=""
        onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault}
      >
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = ({ show, onCancel, ...props }) => {
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

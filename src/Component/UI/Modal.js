import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.onBlur}>
      {" "}
    </div>
  );
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("modal");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onBlur={props.onBlur}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;

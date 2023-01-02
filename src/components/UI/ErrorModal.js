import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Invalid input</h2>
      </header>
      <div className={styles.content}>{props.text}</div>
      <footer className={styles.actions}>
        <Button click={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ text = "Error happened", hide }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hide} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay text={text} onConfirm={hide} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;

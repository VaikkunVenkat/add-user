import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = ({ text = "Error happened", close }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.actions}>
          <Button click={close}>Okay</Button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;

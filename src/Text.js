import styles from "./Text.module.css";

function Text() {
  return (
    <div className={styles.textBox}>
      <p className={styles.textHeader}>
        Improve your front-end skills by building projects
      </p>
      <p className={styles.textContent}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Text;

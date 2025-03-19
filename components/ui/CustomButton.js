import styles from "../../styles/CustomButton.module.css";

const CustomButton = ({ width, children, onClick, ...rest }) => {
  return (
    <button
      className={styles.button}
      style={{ width: `${width}px` }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;

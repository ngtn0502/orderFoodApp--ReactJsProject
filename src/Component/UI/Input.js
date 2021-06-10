import styles from "./Input.module.css";

function Input(props) {
  return (
    <span className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.input.id}>Amount</label>
      <input {...props.input}></input>
    </span>
  );
}

export default Input;

import styles from "./Undo.module.css";

function Undo({ disabled, dispatch }) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      type="button"
      onClick={() => dispatch({ type: "undo" })}
      title="Undo last action"
    >
      ⎌ Undo
    </button>
  );
}

export default Undo;

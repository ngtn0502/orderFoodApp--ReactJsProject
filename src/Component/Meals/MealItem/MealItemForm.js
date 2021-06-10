import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        input={{
          id: `Amount_${props.id}`,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default MealItemForm;

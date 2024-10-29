import css from "./Options.module.css";
function Options({ leaveFeedback }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => leaveFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => leaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => leaveFeedback("bad")}>
        Bad
      </button>
      {/* <button className={css.btn}>Reset</button> */}
    </div>
  );
}
export default Options;

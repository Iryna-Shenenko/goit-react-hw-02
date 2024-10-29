import css from "./Options.module.css";
function Options({ leaveFeedback, totalFeedback, resetFeedback }) {
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
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
export default Options;

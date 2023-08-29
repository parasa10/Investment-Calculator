import { useState } from "react";

const CalculateForm = (props) => {
  const [getCurrentSavings, setCurrentSavings] = useState(10000);
  const [getYearlySavings, setYearlySavings] = useState(1200);
  const [getExpectedReturns, setExpectedReturns] = useState(7);
  const [getDuration, setDuration] = useState(10);

  const onCurrentHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const onYearlyHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const onExpectedHandler = (event) => {
    setExpectedReturns(event.target.value);
  };
  const onDurationHandler = (event) => {
    setDuration(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate({
      currSav: +getCurrentSavings,
      yearSav: +getYearlySavings,
      expeRet: +getExpectedReturns,
      duration: +getDuration,
    });
  };

  const onResetHandler = () => {
    setCurrentSavings(10000);
    setYearlySavings(1200);
    setExpectedReturns(7);
    setDuration(10);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler} onReset={onResetHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={getCurrentSavings}
            onChange={onCurrentHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={getYearlySavings}
            onChange={onYearlyHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={getExpectedReturns}
            onChange={onExpectedHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={getDuration}
            onChange={onDurationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculateForm;

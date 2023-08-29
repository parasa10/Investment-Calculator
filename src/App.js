import { useState } from "react";

import CalculateForm from "./Components/CalculateForm";
import CalculateTable from "./Components/CalculateTable";
import Header from "./Components/Header";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currSav;
    const yearlyContribution = +userInput.yearSav;
    const expectedReturn = +userInput.expeRet / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <CalculateForm onCalculate={calculateHandler} />

      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investement Calculated Yet.</p>
      )}
      {userInput && (
        <CalculateTable
          data={yearlyData}
          initialInvestment={userInput.currSav}
        />
      )}
    </div>
  );
}

export default App;

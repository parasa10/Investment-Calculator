const CalculateTable = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((dataItem) => (
          <tr key={dataItem.year}>
            <td>{dataItem.year}</td>
            <td>{formatter.format(dataItem.savingsEndOfYear)}</td>
            <td>{formatter.format(dataItem.yearlyInterest)}</td>
            <td>
              {formatter.format(
                dataItem.savingsEndOfYear -
                  props.initialInvestment -
                  dataItem.yearlyContribution * dataItem.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  dataItem.yearlyContribution * dataItem.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalculateTable;

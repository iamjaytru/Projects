

function calculateLoan() {
  const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
  const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
  const monthsToPayValue = parseInt(document.getElementById("months-to-pay").value);

  
  const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  const monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}

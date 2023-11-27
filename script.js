function calculateSavings() {
    var initialAmount = parseFloat(document.getElementById('initialAmount').value);
    var monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var numberOfYears = parseFloat(document.getElementById('numberOfYears').value);

    var monthlyInterestRate = interestRate / 100 / 12;
    var totalMonths = numberOfYears * 12;

    var futureValue = initialAmount * Math.pow(1 + monthlyInterestRate, totalMonths) +
                      monthlyDeposit * ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate);

    document.getElementById('result').innerHTML = 'Future Value: $' + futureValue.toFixed(2);
}

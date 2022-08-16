document.getElementById('deposit-btn').addEventListener('click', function () {
    // console.log('clicked-deposite-btn');
    const depositField = document.getElementById('deposit-input-field');
    const depositFieldValue = depositField.value;
    const newDeposit = parseFloat(depositFieldValue);
    // console.log(depositFieldValue);

    const depositElement = document.getElementById('deposit-field');
    const depositElementString = depositElement.innerText;
    const previousDeposit = parseFloat(depositElementString);
    const totalDeposit = previousDeposit + newDeposit;
    // console.log(totalDeposit);
    depositElement.innerText = totalDeposit;

    const balanceField = document.getElementById('balance-field');
    const balanceFieldValue = balanceField.innerText;
    // console.log(balanceFieldValue);
    const previousBalance = parseFloat(balanceFieldValue);
    const totalBalance = previousBalance + newDeposit;
    // console.log(totalBalance);
    balanceField.innerText = totalBalance;
    // balanceField.innerText = totalBalance;

    depositField.value = '';
})

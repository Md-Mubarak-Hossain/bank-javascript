document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log('withdraw-btn-clicked');
    const withdrawField = document.getElementById('withdraw-input-field');
    const withdrawFieldValue = parseFloat(withdrawField.value);

    withdrawField.value = '';

    if (isNaN(withdrawFieldValue)) {
        alert('Enter amount');
        return;
    }

    // console.log(withdrawFieldValue);


    const previousWithdraw = document.getElementById('withdraw-field');
    const previousWithdrawBalance = parseFloat(previousWithdraw.innerText);

    const balanceField = document.getElementById('balance-field');
    const balanceFieldValue = parseFloat(balanceField.innerText);
    // console.log(balanceFieldValue);
    if (balanceFieldValue >= withdrawFieldValue) {
        const totalBalance = balanceFieldValue - withdrawFieldValue;
        // console.log(totalBalance);

        balanceField.innerText = totalBalance;
        // console.log(previousWithdrawBalance);

        const totalWithdraw = previousWithdrawBalance + withdrawFieldValue;
        // console.log(totalWithdraw);
        previousWithdraw.innerText = totalWithdraw;
    }
    else {
        alert('sorry!! Your balance is less than $' + withdrawFieldValue);
    }



})
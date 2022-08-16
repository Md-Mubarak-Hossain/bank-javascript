document.getElementById('login-btn').addEventListener('click', function () {
    // console.log('clicked btn');
    const textField = document.getElementById('input-text-field');
    const textFieldValue = textField.value;
    // console.log(textFieldValue);
    const passwordField = document.getElementById('input-password-field');
    const passwordFieldValue = passwordField.value;
    // console.log(passwordFieldValue);
    if (textFieldValue == 'mubarak@parvej.com' && passwordFieldValue == 'secret123') {
        // console.log(textFieldValue, '\n', passwordFieldValue);
        window.location.href = 'deposit.html';
    }
    else {
        // alert('enter the valid input!!!');
        if (textFieldValue !== 'mubarak@parvej.com') {
            alert('Enter correct email');
        }
        else if (passwordFieldValue !== 'secret123') {
            alert('Enter correct password');
        }
    }

})


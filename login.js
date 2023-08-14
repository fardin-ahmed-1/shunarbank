document.getElementById('btn_submit').addEventListener('click', function () {
    const gmailId = document.getElementById('email_field');
    const gmailValue = gmailId.value;
    const invalidMessage = document.getElementById('invalid_gmail');
    invalidMessage.style.color = 'red'

    if (!gmailValue.includes('@')) {
        invalidMessage.innerText = "User Name not valid"
    } else {
        invalidMessage.style.display = "none"
    }



    const passwordInput = document.getElementById('password_field');
    const passwordValue = passwordInput.value;

})
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


    if(gmailValue=="fardin@gmail.com" && passwordValue=="fardin"){
        alert("Login successful! Redirecting to the next page...");

    // Redirect to another page
        window.location.href ='bank.html'
    } else{
        alert("Invalid User! Maybe you have entered incorrect username or password");
    }

})
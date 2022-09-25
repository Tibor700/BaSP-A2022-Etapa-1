window.onload = function() {

    var email = document.getElementById("email");
    email.setAttribute("placeholder","trackgenix@gmail.com");

    var inputs = document.querySelectorAll('input')
    var continueButton = document.getElementById("continue-botton");
    var alertP = document.createElement('p');

    for (var i = 0; i < 2; i++) {
        var fieldset = inputs[i].parentElement;
        fieldset.appendChild(alertP);
        alertP.className = 'error';
        alertP.innerText = ''
    }

    function emailValidation() {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if (!emailExpression.test(email.value)) {
            alertP.innerText = 'Must be an email';
        }
        if (emailExpression.test(email.value)) {
            alertP.innerText = ' ';
        }
    }

    email.addEventListener('blur', emailValidation);


}


window.onload = function() {

    var email = document.getElementById("email");
    email.setAttribute("placeholder","trackgenix@gmail.com");
    var feedBackEmail = document.getElementById("email-feedback");
    var password = document.getElementById("password");
    var feedBackPassword = document.getElementById("password-feedback")
    var continueButton = document.getElementById("continue-botton");


    function emailValidation() {
        var alertP = document.createElement("p");
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(email.value.length == 0){
            return;
        }
        if (!emailExpression.test(email.value)) {
            alertP.innerText = 'Error in email';
            feedBackEmail.appendChild(alertP);
        }
    }

    email.addEventListener('blur', emailValidation);

    function emailReset() {
        feedBackEmail.innerHTML ="";
    }

    email.addEventListener('focus',emailReset);


    function passwordValidation() {
        var currentPassword = password.value;
        var alertP = document.createElement("p");
        if (password.value.length == 0){
            return;
        }
        if (currentPassword.length < 8) {
            alertP.innerText = "Password must have at least 8 characters";
            feedBackPassword.appendChild(alertP)
            return;
        }
        var hasNumber = false;
        var hasLetter = false;
        for (var i = 0; i < currentPassword.length; i++) {
            if(isNaN(parseInt(currentPassword[i]))) hasLetter = true;
            if(!isNaN(parseInt(currentPassword[i]))) hasNumber = true;
        }
        if (!hasLetter){
            alertP.innerText = "Pasword must have at least a letter"
            feedBackPassword.appendChild(alertP);
            return;
        }

        if (!hasNumber) {
            alertP.innerText = " Password must have at least a number"
            feedBackPassword.appendChild(alertP);
            return;
        }
    }

    password.addEventListener('blur',passwordValidation);

    function passwordReset() {
        feedBackPassword.innerHTML ="";
    }

    password.addEventListener('focus',passwordReset);

    function continueAlert(e){
        e.preventDefault();
        var emailFeedbackStatus = feedBackEmail.firstChild;
        var emailAnswer ="";
        emailFeedbackStatus? emailAnswer = "ERROR: " + emailFeedbackStatus.innerHTML : emailAnswer = email.value;
        var passwordFeedbackStatus =feedBackPassword.firstChild;
        var passwordAnswer ="";
        passwordFeedbackStatus? passwordAnswer = "ERROR: " + passwordFeedbackStatus.innerHTML : passwordAnswer =password.value;
        if(!email.value) emailAnswer = "SORRY : Empty email field.";
        if(!password.value) passwordAnswer = "SORRY : Empty password field.";
        var answer = emailAnswer + "\n" + passwordAnswer;
        alert(answer);
    }

    continueButton.addEventListener('click', continueAlert);
























}


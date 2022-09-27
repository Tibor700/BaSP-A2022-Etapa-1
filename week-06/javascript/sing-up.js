window.onload = function() {

    var email = document.getElementById("email");
    email.setAttribute("placeholder","trackgenix@gmail.com");
    var feedBackEmail = document.getElementById("email-feedback");

    var firstName = document.getElementById("first-name");
    firstName.setAttribute("placeholder","Pepito");

    var lasttName = document.getElementById("last-name");
    lasttName.setAttribute("placeholder","Lopez");

    var dni = document.getElementById("dni");
    dni.setAttribute("placeholder","63477489");

    var direction = document.getElementById("direction");
    direction.setAttribute("placeholder","Eduardo perez 1197");

    var location = document.getElementById("location");
    location.setAttribute("placeholder","Montevideo uruguay");

    var postalCode = document.getElementById("postal-code");
    postalCode.setAttribute("placeholder","9300");

    var telephone = document.getElementById("telephone");
    telephone.setAttribute("placeholder","092439856");

    var bornDate = document.getElementById("born-date");
    bornDate.setAttribute("placeholder","21/03/1997");

    var password = document.getElementById("password");
    var feedBackPassword = document.getElementById("password-feedback");

    var repeatPassword = document.getElementById("repeat-password");

    var createBotton = document.getElementById("create-botton");


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






}

window.onload = function() {

    var email = document.getElementById("email");
    email.setAttribute("placeholder","trackgenix@gmail.com");
    var feedBackEmail = document.getElementById("email-feedback");

    var firstName = document.getElementById("first-name");
    firstName.setAttribute("placeholder","Pepito");
    var feedBackFname = document.getElementById("first-name-feedback");

    var lastName = document.getElementById("last-name");
    lastName.setAttribute("placeholder","Lopez");
    var feedBackLname = document.getElementById("last-name-feedback");

    var dni = document.getElementById("dni");
    dni.setAttribute("placeholder","63477489");
    var feedBackDni = document.getElementById("dni-feedback");

    var direction = document.getElementById("direction");
    direction.setAttribute("placeholder","Eduardo perez 1197");
    var feedBackDirection = document.getElementById("direction-feedback");

    var location = document.getElementById("location");
    location.setAttribute("placeholder","Montevideo uruguay");
    var feedBackLocation = document.getElementById("location-feedback");

    var postalCode = document.getElementById("postal-code");
    postalCode.setAttribute("placeholder","9300");
    var feedBackPcode = document.getElementById("postal-code-feedback");

    var telephone = document.getElementById("telephone");
    telephone.setAttribute("placeholder","092439856");
    var feedBackTelephone = document.getElementById("telephone-feedback");

    var bornDate = document.getElementById("born-date");
    bornDate.setAttribute("placeholder","21/03/1997");
    var feedBackBdate = document.getElementById("born-date-feedback");

    var password = document.getElementById("password");
    var feedBackPassword = document.getElementById("password-feedback");

    var repeatPassword = document.getElementById("repeat-password");
    var feedBackRPassword = document.getElementById("reapeat-password-feedback");

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


    function repeatPasswordValidation() {
        var currentPassword = password.value;
        var currentRPassword = repeatPassword.value;
        var alertP = document.createElement("p");
        if (repeatPassword.value.length == 0){
            return;
        }
        if (currentRPassword.length < 8) {
            alertP.innerText = "Password must have at least 8 characters";
            feedBackRPassword.appendChild(alertP);
            return;
        }
        var hasNumber = false;
        var hasLetter = false;
        for (var i = 0; i < currentRPassword.length; i++) {
            if(isNaN(parseInt(currentRPassword[i]))) hasLetter = true;
            if(!isNaN(parseInt(currentRPassword[i]))) hasNumber = true;
        }
        if (!hasLetter){
            alertP.innerText = "Pasword must have at least a letter";
            feedBackRPassword.appendChild(alertP);
            return;
        }

        if (!hasNumber) {
            alertP.innerText = "Password must have at least a number";
            feedBackRPassword.appendChild(alertP);
            return;
        }
        // if (currentRPassword.value != currentPassword.value) {
        //     alertP.innerText = "Repeat password have to be the same."
        //     feedBackRPassword.appendChild(alertP);
        //     return;
        // }
    }

    repeatPassword.addEventListener('blur',repeatPasswordValidation);

    function repeatPasswordReset() {
        feedBackRPassword.innerHTML ="";
    }

    repeatPassword.addEventListener('focus',repeatPasswordReset);




    function firstNameValidation()
    {
        var currentFirstName = firstName.value;
        var alertP = document.createElement("p");
        if (currentFirstName.length == 0) {
            return;
        }
        if (currentFirstName.length < 3) {
            alertP.innerText = "It must contain at least 3 characters.";
            feedBackFname.appendChild(alertP);
            return;
        }
        for (var i = 0; i < currentFirstName.length; i++) {
            if (!isNaN(parseInt(currentFirstName[i])) || (currentFirstName[i].charCodeAt() > 32 && currentFirstName[i].charCodeAt() < 48)) {
                alertP.innerText = "First name must contain only letters.";
                feedBackFname.appendChild(alertP);
            }
        }
    }


    firstName.addEventListener('blur',firstNameValidation);

    function firstNameReset() {
        feedBackFname.innerHTML = "";
    }

    firstName.addEventListener('focus',firstNameReset);



    function lastNameValidation()
    {
        var currentLastName = lastName.value;
        var alertP = document.createElement("p");
        if (currentLastName.length == 0) {
            return;
        }
        if (currentLastName.length < 3) {
            alertP.innerText = "It must contain at least 3 characters.";
            feedBackLname.appendChild(alertP);
            return;
        }
        for (var i = 0; i < currentLastName.length; i++) {
            if (!isNaN(parseInt(currentLastName[i])) || (currentLastName[i].charCodeAt() > 32 && currentLastName[i].charCodeAt() < 48)) {
                alertP.innerText = "Last name must contain only letters.";
                feedBackLname.appendChild(alertP);
            }
        }
    }

    lastName.addEventListener('blur',lastNameValidation);

    function lastNameReset() {
        feedBackLname.innerHTML = "";
    }

    lastName.addEventListener('focus',lastNameReset);


    function dniValidation () {
        var currentDni = dni.value;
        var alertP = document.createElement("p");
        if (currentDni.length == 0) {
            return;
        }
        if (currentDni.length < 7) {
            alertP.innerText = "It must contain at least 7 numbers.";
            feedBackDni.appendChild(alertP);
            return;
        }
        for (var i = 0; i < currentDni.length; i++) {
            if (isNaN(currentDni[i])) {
                alertP.innerText = "DNI have to contain only numbers.";
                feedBackDni.appendChild(alertP);
            }
        }
    }

    dni.addEventListener('blur',dniValidation);

    function dniReset() {
        feedBackDni.innerHTML = "";
    }

    dni.addEventListener('focus',dniReset);


    function telephoneValidation () {
        var currentTelephone = telephone.value;
        var alertP = document.createElement("p");
        if (currentTelephone.length == 0) {
            return;
        }
        if (currentTelephone.length < 10 || currentTelephone.length > 10 ) {
            alertP.innerText = "telephone must contain 10 numbers.";
            feedBackTelephone.appendChild(alertP);
            return;
        }
        for (var i = 0; i < currentTelephone.length; i++) {
            if (isNaN(currentTelephone[i])) {
                alertP.innerText = "telephone must contain only numbers.";
                feedBackTelephone.appendChild(alertP);
            }
        }
    }

    telephone.addEventListener('blur',telephoneValidation);

    function telephoneReset() {
        feedBackTelephone.innerHTML = "";
    }

    telephone.addEventListener('focus',telephoneReset);


    function pCodeValidation () {
        var currentPcode = postalCode.value;
        var alertP = document.createElement("p");
        if (currentPcode.length == 0) {
            return;
        }
        if (currentPcode.length < 4 || currentPcode.length > 5 ) {
            alertP.innerText = "Postal code must contain 4 or 5 numbers.";
            feedBackPcode.appendChild(alertP);
            return;
        }
        for (var i = 0; i < currentPcode.length; i++) {
            if (isNaN(currentPcode[i])) {
                alertP.innerText = "Postal code must contain only numbers.";
                feedBackPcode.appendChild(alertP);
            }
        }
    }

    postalCode.addEventListener('blur',pCodeValidation);

    function pCodeReset() {
        feedBackPcode.innerHTML = "";
    }

    postalCode.addEventListener('focus',pCodeReset);


    function directionValidation () {
        var currentDirection = direction.value;
        var alertP = document.createElement("p");
        if (currentDirection.length == 0) {
            return;
        }
        if (currentDirection.length < 5 ) {
            alertP.innerText = "Direction must contain 4 or 5 numbers.";
            feedBackDirection.appendChild(alertP);
            return;
        }
        // var hasSpace = false;
        // for (var i = 0; i < currentdirection.length; i++) {
        //     if (currentdirection[i].indexof (" ")) {
        //         hasSpace = true;
        //         return;
        //     }else {
        //         alertP.innerText = "Direction must contain space in the midle.";
        //         feedBackDirection.appendChild(alertP);
        //     }
        // }
    }

    direction.addEventListener('blur',directionValidation);

    function directionReset() {
        feedBackDirection.innerHTML = "";
    }

    direction.addEventListener('focus',directionReset);


    function locationValidation () {
        var currentLocation = location.value;
        var alertP = document.createElement("p");
        if (currentLocation.length == 0) {
            return;
        }
        if (currentLocation.length < 3 ) {
            alertP.innerText = "Location must contain at least 3 characters.";
            feedBackLocation.appendChild(alertP);
            return;
        }
    }

    location.addEventListener('blur',locationValidation);

    function locationReset() {
        feedBackLocation.innerHTML = "";
    }

    location.addEventListener('focus',locationReset);


    function bornDateValidation (){
        
    }

































}



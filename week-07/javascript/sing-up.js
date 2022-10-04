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
    telephone.setAttribute("placeholder","0924398563");
    var feedBackTelephone = document.getElementById("telephone-feedback");

    var bornDate = document.getElementById("born-date");

    var password = document.getElementById("password");
    var feedBackPassword = document.getElementById("password-feedback");

    var repeatPassword = document.getElementById("repeat-password");
    var feedBackRPassword = document.getElementById("reapeat-password-feedback");

    var createBotton = document.getElementById("create-botton");

    firstName.value=localStorage.getItem('name');
    lastName.value=localStorage.getItem('lastName');
    email.value=localStorage.getItem('email');
    dni.value=localStorage.getItem('dni');
    bornDate.value=localStorage.getItem('bornDate');
    direction.value=localStorage.getItem('direction');
    location.value=localStorage.getItem('location');
    postalCode.value=localStorage.getItem('postalCode');
    telephone.value=localStorage.getItem('telephone');
    password.value=localStorage.getItem('password');
    repeatPassword.value=localStorage.getItem('repeatPassword');

    function emailValidation() {
        var alertP = document.createElement("p");
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(email.value.length === 0){
            alertP.innerText = "Email can not be empty";
            feedBackEmail.appendChild(alertP);
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
        if (password.value.length === 0){
            alertP.innerText = "Password can not be empty";
            feedBackPassword.appendChild(alertP);
        }
        if (currentPassword.length < 8) {
            alertP.innerText = "Password must have at least 8 characters";
            feedBackPassword.appendChild(alertP)
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
        }

        if (!hasNumber) {
            alertP.innerText = " Password must have at least a number"
            feedBackPassword.appendChild(alertP);
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
        if (repeatPassword.value.length === 0){
            alertP.innerText = "Password can not be empty";
            feedBackRPassword.appendChild(alertP);
        }
        if (currentRPassword.length < 8) {
            alertP.innerText = "Password must have at least 8 characters";
            feedBackRPassword.appendChild(alertP);
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
        }

        if (!hasNumber) {
            alertP.innerText = "Password must have at least a number";
            feedBackRPassword.appendChild(alertP);
        }
        if (currentPassword!==currentRPassword){
            alertP.innerText="Repeat password must be the same password"
            feedBackRPassword.appendChild(alertP);
        }
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
        if (currentFirstName.length === 0) {
            alertP.innerText = "First name can not be empty";
            feedBackFname.appendChild(alertP);
        }
        if (currentFirstName.length < 3) {
            alertP.innerText = "It must contain at least 3 characters.";
            feedBackFname.appendChild(alertP);
        }
        for (var i = 0; i < currentFirstName.length; i++) {
            if (!isNaN(parseInt(currentFirstName[i])) || (currentFirstName[i].charCodeAt() > 32 && currentFirstName[i].charCodeAt() < 48))
            {
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
        if (currentLastName.length === 0) {
            alertP.innerText = "Last name can not be empty";
            feedBackLname.appendChild(alertP);
        }
        if (currentLastName.length < 3) {
            alertP.innerText = "It must contain at least 3 characters.";
            feedBackLname.appendChild(alertP);
        }
        for (var i = 0; i < currentLastName.length; i++) {
            if (!isNaN(parseInt(currentLastName[i])) || (currentLastName[i].charCodeAt() > 32 && currentLastName[i].charCodeAt() < 48))
            {
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
        if (currentDni.length === 0) {
            alertP.innerText = "DNI can not be empty";
            feedBackDni.appendChild(alertP);
        }
        if (currentDni.length < 7) {
            alertP.innerText = "It must contain at least 7 numbers.";
            feedBackDni.appendChild(alertP);
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
        if (currentTelephone.length === 0) {
            alertP.innerText = "Telephone can not be empty";
            feedBackTelephone.appendChild(alertP);
        }
        if (currentTelephone.length !== 10  ) {
            alertP.innerText = "telephone must contain 10 numbers.";
            feedBackTelephone.appendChild(alertP);
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
        if (currentPcode.length === 0) {
            alertP.innerText = "Postal code can not be empty";
            feedBackPcode.appendChild(alertP);
        }
        if (currentPcode.length < 4 || currentPcode.length > 5 ) {
            alertP.innerText = "Postal code must contain 4 or 5 numbers.";
            feedBackPcode.appendChild(alertP);
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
        if (currentDirection.length === 0) {
            alertP.innerText = "Direction can not be empty";
            feedBackDirection.appendChild(alertP);
        }
        if (currentDirection.length < 5 ) {
            alertP.innerText = "Direction must contain 4 or 5 numbers.";
            feedBackDirection.appendChild(alertP);
        }
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
            alertP.innerText = "Location can not be empty";
            feedBackLocation.appendChild(alertP);
        }
        if (currentLocation.length < 3 ) {
            alertP.innerText = "Location must contain at least 3 characters.";
            feedBackLocation.appendChild(alertP);
        }
    }

    location.addEventListener('blur',locationValidation);

    function locationReset() {
        feedBackLocation.innerHTML = "";
    }

    location.addEventListener('focus',locationReset);


    function createAlert(e)
    {
        e.preventDefault();

        var emailFeedbackStatus = feedBackEmail.firstChild;
        var emailAnswer ="";
        emailFeedbackStatus? emailAnswer = "ERROR: " + emailFeedbackStatus.innerHTML : emailAnswer = email.value;

        var passwordFeedbackStatus =feedBackPassword.firstChild;
        var passwordAnswer ="";
        passwordFeedbackStatus? passwordAnswer = "ERROR: " + passwordFeedbackStatus.innerHTML : passwordAnswer =password.value;

        var fNameFeedbackStatus = feedBackFname.firstChild;
        var fNameAnswer ="";
        fNameFeedbackStatus? fNameAnswer = "ERROR: " + fNameFeedbackStatus.innerHTML : fNameAnswer = firstName.value;

        var lNameFeedbackStatus = feedBackLname.firstChild;
        var lNameAnswer ="";
        lNameFeedbackStatus? lNameAnswer = "ERROR: " + lNameFeedbackStatus.innerHTML : lNameAnswer = lastName.value;

        var dniFeedbackStatus = feedBackDni.firstChild;
        var dniAnswer ="";
        dniFeedbackStatus? dniAnswer = "ERROR: " + dniFeedbackStatus.innerHTML : dniAnswer = dni.value;

        var directionFeedbackStatus = feedBackDirection.firstChild;
        var directionAnswer ="";
        directionFeedbackStatus? directionAnswer = "ERROR: " + directionFeedbackStatus.innerHTML : directionAnswer = direction.value;

        var locationFeedbackStatus = feedBackLocation.firstChild;
        var locationAnswer ="";
        locationFeedbackStatus? locationAnswer = "ERROR: " + locationFeedbackStatus.innerHTML : locationAnswer = location.value;

        var postalCodeFeedbackStatus = feedBackPcode.firstChild;
        var postalCodeAnswer ="";
        postalCodeFeedbackStatus? postalCodeAnswer = "ERROR: " + postalCodeFeedbackStatus.innerHTML : postalCodeAnswer =
        postalCode.value;

        var telephoneFeedbackStatus = feedBackTelephone.firstChild;
        var telephoneAnswer ="";
        telephoneFeedbackStatus? telephoneAnswer = "ERROR: " + telephoneFeedbackStatus.innerHTML : telephoneAnswer = telephone.value;

        var repeatPasswordFeedbackStatus = feedBackRPassword.firstChild;
        var repeatPasswordAnswer ="";
        repeatPasswordFeedbackStatus? repeatPasswordAnswer = "ERROR: " + repeatPasswordFeedbackStatus.innerHTML :
        repeatPasswordAnswer =repeatPassword.value;


        if(!repeatPassword.value) repeatPasswordAnswer = "SORRY : Empty repeatPassword field.";
        if(!telephone.value) telephoneAnswer = "SORRY : Empty telephone field.";
        if(!postalCode.value) postalCodeAnswer = "SORRY : Empty postalCode field.";
        if(!location.value) locationAnswer = "SORRY : Empty location field.";
        if(!direction.value) directionAnswer = "SORRY : Empty direction field.";
        if(!dni.value) dniAnswer = "SORRY : Empty DNI field.";
        if(!lastName.value) lNameAnswer = "SORRY : Empty last name field.";
        if(!firstName.value) fNameAnswer = "SORRY : Empty first name field.";
        if(!email.value) emailAnswer = "SORRY : Empty email field.";
        if(!password.value) passwordAnswer = "SORRY : Empty password field.";

        if(!repeatPasswordFeedbackStatus && !telephoneFeedbackStatus && !postalCodeFeedbackStatus &&
            !locationFeedbackStatus && !directionFeedbackStatus && !dniFeedbackStatus &&
            !lNameFeedbackStatus && !fNameFeedbackStatus && !passwordFeedbackStatus && !emailFeedbackStatus)
        {
            passwordAnswer ="Password: " + password.value; emailAnswer ="Email: " + email.value;
            fNameAnswer="Firts name: " + firstName.value; lNameAnswer ="Last name: "+ lastName.value;
            dniAnswer ="DNI: "+dni.value; directionAnswer ="Direction: " +direction.value;
            locationAnswer ="Location: "+location.value; postalCodeAnswer ="Postal code: "+postalCode.value;
            telephoneAnswer ="Telephone: "+telephone.value; repeatPasswordAnswer ="Repeat password: "+repeatPassword.value;

            var dateNewformat = bornDate.value.split('-');
            var newDob = dateNewformat[1]+'/'+dateNewformat[2]+'/'+dateNewformat[0];
            var storedDob = dateNewformat[0]+'-'+dateNewformat[1]+'-'+dateNewformat[2];
            console.log(dateNewformat);
            console.log(bornDate.value);

            var url ='https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+firstName.value+'&lastName='+lastName.value
            +'&dni='+dni.value+'&dob='+newDob+'&phone='+telephone.value+'&address='+direction.value+'&city='+location.value
            +'&zip='+postalCode.value+'&email='+email.value+'&password='+password.value;

                fetch(url)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                if (data.success) {
                    localStorage.setItem('name', firstName.value);
                    localStorage.setItem('lastName', lastName.value);
                    localStorage.setItem('dni', dni.value);
                    localStorage.setItem('bornDate', storedDob);
                    localStorage.setItem('telephone', telephone.value);
                    localStorage.setItem('direction', direction.value);
                    localStorage.setItem('location', location.value);
                    localStorage.setItem('postalCode', postalCode.value);
                    localStorage.setItem('email', email.value);
                    localStorage.setItem('password', password.value);
                    localStorage.setItem('repeatPassword', repeatPassword.value);
                    alert(data.msg)
                }
                else {
                    var string = ''
                    for (var error of data.errors) {
                        string += '- ' + error.msg + '\n'
                    }
                    alert('Something is wrong: \n' + string)
                    throw new Error("There was an problem with the request")
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }

        var answer = emailAnswer +"\n"+ passwordAnswer +"\n"+ fNameAnswer +"\n"+ lNameAnswer +"\n"+ dniAnswer +"\n"+ directionAnswer
        +"\n"+ locationAnswer +"\n"+ telephoneAnswer +"\n"+ repeatPasswordAnswer;
        alert(answer);
    }

    createBotton.addEventListener('click', createAlert);

































}



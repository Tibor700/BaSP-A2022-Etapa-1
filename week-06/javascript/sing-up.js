window.onload = function() {

    var email = document.getElementById("email");
email.setAttribute("placeholder","trackgenix@gmail.com");

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

var createBotton = document.getElementById("create-botton");
createBotton.addEventListener('click',buttonClick);










}

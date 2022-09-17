var nombreciudad = 'montevideo'
console.log('El nombre en mayuscula es:',nombreciudad.toUpperCase());
var substr = nombreciudad.substring(0,5);
console.log('el substring es:',substr);
var substr2 = nombreciudad.substring(nombreciudad.length-3,nombreciudad.length);
console.log('el substring2 es:',substr2);
var substr3 = nombreciudad.toUpperCase().substring(0,1) + nombreciudad.toLowerCase().substring(1,nombreciudad.length);
console.log('el substring3 es :',substr3);
var strblanc ='pedro picapiedra';
var blancposition = strblanc.indexOf(' ');
console.log('esta es la posicion del espacio:',blancposition);
var ciudadpais = 'montevideo uruguay';
var substr4 = ciudadpais.toUpperCase().substring(0,1) + ciudadpais.toLowerCase().substring(1,ciudadpais.indexOf(' ')+1) +
ciudadpais.toUpperCase().substring(ciudadpais.indexOf(' ')+1,ciudadpais.indexOf(' ')+2) +
ciudadpais.toLowerCase().substring(ciudadpais.indexOf(' ')+2,ciudadpais.length);
console.log('este es el substring4:',substr4);

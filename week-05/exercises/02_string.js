console.log('Exercise 2 string');
// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
console.log('Exercise 2.a:');
var nombreciudad = 'montevideo'
console.log('El nombre en mayuscula es:',nombreciudad.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable
console.log('Exercise 2.b:');
var substr = nombreciudad.substring(0,5);
console.log('el substring es:',substr);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
// guardando el resultado en una nueva variable
console.log('Exercise 2.c:');
var substr2 = nombreCiudad.substring(nombreCiudad.length-3,nombreCiudad.length);
console.log('el substring2 es:',substr2);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula.Guardar el resultado en una nueva variable
console.log('Exercise 2.d:');
var substr3 = nombreCiudad.toUpperCase().substring(0,1) + nombreCiudad.toLowerCase().substring(1,nombreCiudad.length);
console.log('el substring3 es :',substr3);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable
console.log('Exercise 2.e:');
var strBlanc ='pedro picapiedra';
var blancPosition = strBlanc.indexOf(' ');
console.log('esta es la posicion del espacio:',blancPosition);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
// ambas palabras en mayúscula y las demás letras en minúscula
console.log('Exercise 2.f:');
var ciudadPais = 'montevideo uruguay';
var substr4 = ciudadPais.toUpperCase().substring(0,1) + ciudadpais.toLowerCase().substring(1,ciudadPais.indexOf(' ')+1) +
ciudadPais.toUpperCase().substring(ciudadPais.indexOf(' ')+1,ciudadPais.indexOf(' ')+2) +
ciudadPais.toLowerCase().substring(ciudadPais.indexOf(' ')+2,ciudadPais.length);
console.log('este es el substring4:',substr4);

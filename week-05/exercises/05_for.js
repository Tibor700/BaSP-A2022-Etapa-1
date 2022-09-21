console.log('Exercise 5 for');
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
// para mostrar una alerta utilizando cada una de las palabras.
console.log('Exercise 5.a:');
var semana = ['lunes','martes','miercoles','jueves','viernes'];
for (i=0; i<semana.length; i++)
{
    alert(semana[i]);
}
console.log(semana);

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('Exercise 5.b:');
for (i=0; i<semana.length; i++)
{
    semana[i] = semana[i].toUpperCase().substring(0,1) + semana[i].toLowerCase().substring(1,semana[i].length);
    alert(semana[i]);
}
console.log(semana);

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto (a)
// recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.
console.log('Exercise 5.c:');
var sentence ='';
semana = ['lunes','martes','miercoles','jueves','viernes'];
for (i=0; i<semana.length; i++) {
    sentence =  sentence + semana [i];
}
alert(sentence);
console.log(sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar con el número de la repetición,
// al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
// Mostrar por la consola del navegador el array final
console.log('Exercise 5.d:');
var arrayContainer = [];
for (i=0; i<10; i++) {
    arrayContainer.push(i);
}
console.log('este es el array lleno:',arrayContainer);

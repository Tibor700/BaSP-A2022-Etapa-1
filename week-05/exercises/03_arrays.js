console.log('Exercise 3 array');
// Dado el array mostrar por consola los meses 5 y 11
console.log('Exercise 3.a:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log('los meses 5 y 11 son :',meses[5-1],meses[11-1]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola
console.log('Exercise 3.b:');
console.log('el arreglo ordenado alfabeticamente:',meses.sort());
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// Agregar un elemento al principio y al final del array
console.log('Exercise 3.c:');
meses.push('ultimo');
meses.unshift('primero');
console.log('estos son los elementos agregados:',meses);

// Quitar un elemento del principio y del final del array
console.log('Exercise 3.d:');
meses.pop();
meses.shift();
console.log('arreglo con los elementos eliminados:',meses);

// Invertir el orden del array
console.log('Exercise 3.e:');
meses.reverse();
console.log('este es el arreglo invertido:',meses);
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión
console.log('Exercise 3.f:');
var strmeses = meses.join('-');
console.log('este es el string con guiones:',strmeses);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
console.log('Exercise 3.g:');
var mesesAlterno =meses.slice(4,11);
console.log('este es el array alterno:',mesesAlterno);
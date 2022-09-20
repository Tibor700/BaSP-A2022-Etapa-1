console.log('Exercise 6 functions');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('Exercise 6.a:');
function suma (num1,num2)
{
return num1 + num2;
}
var result = suma(1,4);
console.log('el resultado es:',result);

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
//  de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('Exercise 6.b:');
function suma2 (num1,num2)
{
    if (isNaN(num1)==false && isNaN(num2)==false)
    {
        return num1+num2;
    } else{
        alert('los parametros tienen error');
        return NaN;
    }
}
var ejemplo =suma2(3,'hola');
var ejemplo2 =suma2(3,6);
console.log(ejemplo);
console.log(ejemplo2);

// crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('Exercise 6.c:');
function validinteger (num1)
{
    var reusltado = num1 - Math.floor(num1);
    return reusltado == 0;
}
console.log(validinteger(3));
console.log(validinteger(3.4));

// A la función suma del ejercicio 6b agregarle una llamada a la función del ejercicio 6c.
// y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y
// retornar el número convertido a entero
console.log('Exercise 6.d:');
function suma3 (num1,num2)
{
    if (isNaN(num1)==false && isNaN(num2)==false && validinteger(num1) && validinteger(num2))
    {
        return num1+num2;
    } else if (validinteger(num1)==false)
    {
        alert('hay parametros decimales:',num1,num2);
        return Math.floor(num1)+Math.floor(num2);
    } else if(validinteger(num2)==false)
    {
        alert('hay parametros decimales:',num2,num1);
        return Math.floor(num2)+Math.floor(num1);
    } else
    {
        alert('los parametros tienen error');
        return NaN;
    }
}

var ejm = suma3(3,4);
var ejm2 = suma3(2,3.5);
var ejm3 = suma3(2,'hola');
console.log('resultado 1:',ejm);
console.log('resultado 2:',ejm2);
console.log('resultado 3:',ejm3);

// Convertir la validación del ejercicio 6d en una función separada y llamarla dentro de la función suma
// probando que todo siga funcionando igual.
console.log('Exercise 6.e:');
var resultado1 = suma(suma3(2,3),suma3(3,7));
var resultado2 = suma(suma3(2.6,3),suma3(3,7));
var resultado3 = suma(suma3(2,3),suma3(3,'hola'));
console.log('este es el resultado:',resultado1);
console.log('este es el resultado:',resultado2);
console.log('este es el resultado:',resultado3);
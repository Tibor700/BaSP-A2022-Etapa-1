console.log('Exercise 4 if and else');
// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random
console.log('Exercise 4.a:');
var randomnumber = Math.random();
if(randomnumber >= 0.5)
{
    alert('Greater than 0,5');
} else{
    alert('Lower than 0,5')
}
console.log('el numero es:',randomnumber);

// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los mensajes de alerta
console.log('Exercise 4.b:');
const generaraleatorio = (min,max ) => {
return Math.floor(Math.random() * (max - min)) + min;
}
var Age = generaraleatorio(0,101);
if(Age <= 2){
    alert('Bebe');
} else if (Age >=2 && Age <=12){
    alert('Niño');
} else if (Age >=13 && Age <=19){
    alert('Adolescente')
} else if (Age >=20 && Age <=30){
    alert('Joven');
} else if (Age >=31 && Age <=60){
    alert('Adulto')
} else if (Age >=61 && Age <=75){
    alert('Adulto mayor');
} else {
    alert('Anciano')
}
console.log('la edad es:',Age);
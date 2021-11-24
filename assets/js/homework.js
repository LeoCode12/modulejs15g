/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

const number = parseInt(prompt('dame un numero'));
if (isNaN(number) == false) {
    if ((number%2) == 0) {
        console.log(`${number} es par`);
    }else{
        console.log(`${number} es impar`);
    }
}else{
    console.error('valor no aceptado');
}

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

var day = prompt('dame un dia de la semana');
switch (day) {
    case "Lunes":
        console.log(`${day} es el dia 2`);
        break;
    case "Martes":
        console.log(`${day} es el dia 3`);
        break;
    case "Miercoles":
        console.log(`${day} es el dia 4`);
        break;
    case "Jueves":
        console.log(`${day} es el dia 5`);
        break;
    case "Viernes":
        console.log(`${day} es el dia 6`);
        break;
    case "Sabado":
        console.log(`${day} es el dia 7`);
        break;
    case "Domingo":
        console.log(`${day} es el dia 1`);
        break;
    default:
        console.error(`no es un dia valido`);
        break;
}

/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const numberOne = parseInt(prompt('dame valor de primer digito'));
const numberTwo = parseInt(prompt('dame valor de segundo digito'));

if (isNaN(numberOne) == false && 
    isNaN(numberTwo) == false) {
    if (numberOne > numberTwo) {
        console.log(`${numberOne} es mayor`);
        console.log(`${numberTwo} es menor`);
    }
    if (numberOne < numberTwo) {
        console.log(`${numberTwo} es mayor`);
        console.log(`${numberOne} es menor`);
    }
    if(numberOne == numberTwo){
        console.log(`Ambos digitos son iguales`);
    }
}else{
    console.error('algunos valores no son numericos');
}
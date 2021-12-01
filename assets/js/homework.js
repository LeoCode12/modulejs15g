/** 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100
*/

for (let i = 1; i <= 100; i++)
  if (i % 2 == 0) console.log(i);

/**
 * Ejercicio 2
 * Pedir al usuario un string
 * Invertir el orden e imprimir en consola
 * Entrada: "reverse"
 * Salida: -> esrever
 * hint: https://www.w3schools.com/jsref/jsref_length_string.asp
*/

var wordUser = prompt('dame una palabra')
var wordReverse = ''
let j = wordUser.length-1 // 4 - 1 = 3
for (let i = 0; i < wordUser.length; i++) {
  wordReverse += wordUser[j].toLowerCase()
  j--
}
console.log(wordReverse);

/**
 *  word= H o l a     wordReverse = a l o H
 *  i =   0 1 2 3     j =           3 2 1 0
 *  j =   3 2 1 0     i =           0 1 2 3
 */

/**
 * Ejercicio 3 
 * Declarar un string de al menos 2 palabras
 * Imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 * hint: https://www.w3schools.com/jsref/jsref_replace.asp
 */

let wordNew = ''
for (let i = 0; i < wordUser.length; i++) {
  
  if (wordUser[i] === ' ') {
    wordNew += "-"
  }
  wordNew += wordUser[i].trim()
}
console.log(wordNew);

/**
 * Ejercicio 4
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 * 
 * hint: https://www.w3schools.com/jsref/jsref_slice_string.asp
 * hint: https://www.w3schools.com/jsref/jsref_indexof.asp
 */

let email = prompt('Correo Electronico')
let emailMask = '' 

for (let i = 0; i < email.length; i++) {
  if (email[i] == '@') {
    j = email.slice(0, i).length
    while (j > 0) {
      emailMask += '*'
      j--
    }
    emailMask += email.slice(i, email.length)
  }
}
console.log(emailMask);
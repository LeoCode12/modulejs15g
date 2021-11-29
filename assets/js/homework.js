// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo



// For solution
// const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

// let wordWithoutSpace = ''
// let wordReversed = ''

// if(wordUser != ''){
//     // Remove White space
//     for(i = 0; i < wordUser.length; i++){
//         if(wordUser[i] !== ' '){
//             wordWithoutSpace = wordWithoutSpace +  wordUser[i]
//         }
//     }
//     console.log(wordWithoutSpace)

//     // word reversed  
//     for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
//         wordReversed = wordReversed + wordWithoutSpace[j]
//     } 
//     console.log(wordReversed)

//     wordWithoutSpace === wordReversed ?
//         console.log(`La palabra "${wordUser}" es un palindromo`)
//     :
//         console.log(`La palabra "${wordUser}" No es un palindromo`)

// } else {
//     console.log('Inserta una palabra valida')
// }


// Homework
// De la solucion anterior generar lo siguiente
// 1. While solution
// 2. Permitir acentos
// 

// const wordUser = prompt('dame una palabra').trim().toLowerCase()

// let wordWithoutSpace = ''
// let wordReversed = ''
// const removeAccents = (str) => {
//   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// if (wordUser != '') {
//   i = 0
//   while (i < wordUser.length) {
//     if(wordUser[i] !== ' '){
//       wordWithoutSpace = removeAccents(wordWithoutSpace +  wordUser[i])
//     }
//     i++
//   }
//   console.log(wordWithoutSpace);

//   //word reversed
//   j = wordWithoutSpace.length -1
//   while (j >= 0) {
//     wordReversed = wordReversed + wordWithoutSpace[j]
//     j--
//   }
//   console.log(wordReversed)

//   wordWithoutSpace === wordReversed ?
//     console.log(`La palabra "${wordUser}" es un palindromo`)
//   :
//     console.log(`La palabra "${wordUser}" No es un palindromo`)


// }else{
//   console.error('Inserta una palabra clave');
// }

// Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

let counter = 0

for (i = 1; i <= 100; i++){
  if ((i%3) == 0 || (i%5) == 0) {

    counter += i
  } 
}
console.log('la suma es: ' + counter);
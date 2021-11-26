// Estar en la rama de la clase
// - En el archivo weather.js
// - Pedir al usuario que ingrese como esta el clima en su ciudad
// --Opciones
// ---Soleado
// ---Lluvioso
// ---Nevando
// ---Nublado
// -Pedir la temperatura aproximada en ºC
// -Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
// --P.ej: En tu ciudad, el día está "Soleado" con una temperatura de 100ºF
const weather = prompt('como esta el clima en su ciudad? \n 1. Soleado \n 2. Lluvioso \n 2. Nevando \n 2. Nublado ')
const celsiusGrade = parseInt(prompt('¿Cual es la temperatura en tu localidad?'))
const fahrenheitGrade  = (celsiusGrade * 9/5) + 32

if(!isNaN(celsiusGrade && typeof weather === 'string') ){
    switch(weather) {
        case 'Soleado':
            console.log(`En tu ciudad, el día está 'Soleado' con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Lluvioso':
            console.log(`En tu ciudad, el día está Lluvioso con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Nevando':
            console.log(`En tu ciudad, el día está Nevando con una temperatura de ${fahrenheitGrade}ºF`)
        break
        case 'Nublado':
            console.log(`En tu ciudad, el día está Nublado con una temperatura de ${fahrenheitGrade}ºF`)
        break
        default:
            console.log(`No entiendo cual es el clima`)
    }
}
// 1. Estar en la rama class/class-two
// 2. Crear el archivo celsiusFahrenheit.js
// En el archivo...
// 3. pedir al usuario los grados actuales en su localidad 
// 4. Arrojar en un alert() con los ºC convertidos a ºF

const grade = parseInt(prompt('¿A cuantos grados celsius esta hoy?'));
if(isNaN(grade) == false){
    console.log(`Es equivalente a ${(grade * 9/5) + 32}°F`);
}else{
    console.error('No es un valor numerico');
}
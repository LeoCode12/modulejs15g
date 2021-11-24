    // Ejercicio 1:
	// Pedir 2 variables por prompt
	// Si a > b dividir a entre b
	// Si a < b sumar a más b
	// si a == b multiplicar ambos numeros
	// Imprimir el resultado en consola    

const a = parseInt(prompt(`dame el valor de A: `));
const b = parseInt(prompt(`dame el valor de B: `));

if (isNaN(a) == false && isNaN(b) == false) {
	if (a > b) {
		console.log(a/b);
	} 
	if(a < b){
		console.log(a+b);
	}
	if (a == b) {
		console.log(a*b);
	}
}else{
	console.error('Algunos valores no son numericos');
}
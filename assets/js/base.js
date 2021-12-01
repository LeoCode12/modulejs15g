const sumaValue = (number, sumaValues = 0) =>{
	for (let i = 0; i < number.length; i++) {
		sumaValues += parseInt(number[i])
	}
	return sumaValues
}
let number = prompt(`dame un numero`)
console.log(sumaValue(number));